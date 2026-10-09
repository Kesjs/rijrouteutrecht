import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/rijbewijzen",
  ...["am", "a", "b", "be", "c", "d", "t"].map((c) => `/rijbewijzen/${c}`),
  "/pakketten",
  "/reserveren",
  "/theorie",
  "/over-ons",
  "/instructeurs",
  "/contact",
  "/faq",
  "/privacy",
  "/algemene-voorwaarden",
  "/bestellen/beginner",
  "/betaling/annule",
  "/betaling/fout",
];

test("public routes render with one main heading", async ({ page }) => {
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page).toHaveTitle(/Vooruit Rijschool/);
    await expect(page.locator("h1"), route).toHaveCount(1);
  }
  const missing = await page.goto("/does-not-exist");
  expect(missing?.status()).toBe(404);
});

test("responsive pages do not overflow", async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/rijbewijzen",
      "/rijbewijzen/t",
      "/pakketten",
      "/reserveren",
      "/bestellen/beginner",
    ]) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `${route} at ${width}px`,
      ).toBe(true);
      if (route === "/rijbewijzen" && [390, 1440].includes(width)) {
        await page.screenshot({
          path: `test-results/catalog-${width}.png`,
          fullPage: true,
        });
      }
    }
  }
});

test("request preselection and client validation", async ({ page }) => {
  await page.goto("/reserveren?categorie=b&pakket=beginner");
  await expect(page.getByLabel("Rijbewijs", { exact: false })).toHaveValue("B");
  await expect(
    page.getByLabel("Pakket of prestatie", { exact: false }),
  ).toHaveValue("Pakket Beginner");
  await page.getByRole("button", { name: "Aanvraag versturen" }).click();
  await expect(page.locator("#naam-error")).toBeVisible();
  await expect(page.locator("#email-error")).toBeVisible();
});

test("homepage images load and header pages are reachable at every breakpoint", async ({
  page,
}) => {
  const links = [
    "/rijbewijzen",
    "/pakketten",
    "/theorie",
    "/over-ons",
    "/instructeurs",
    "/faq",
    "/contact",
  ];
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    if (width === 390)
      await page.locator('button[aria-controls="mobiel-menu"]').click();
    for (const href of links) {
      await expect(
        page.locator(`header a[href="${href}"]:visible`).first(),
      ).toBeVisible();
    }
    if (width === 390) await page.keyboard.press("Escape");
    const images = page.locator("main img");
    expect(await images.count()).toBeGreaterThanOrEqual(6);
    for (const picture of await images.all()) {
      await picture.scrollIntoViewIfNeeded();
      await expect(picture).toHaveJSProperty("complete", true);
      await expect
        .poll(() =>
          picture.evaluate((img: HTMLImageElement) => img.naturalWidth),
        )
        .toBeGreaterThan(0);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: `artifacts/home-${width}.png`,
      fullPage: true,
    });
  }
});

test("runtime APIs reject invalid requests", async ({ request }) => {
  if (
    process.env.E2E_PRODUCTION === "1" &&
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    expect((await request.post("/api/aanvraag", { data: null })).status()).toBe(
      503,
    );
    expect((await request.post("/api/checkout", { data: {} })).status()).toBe(
      503,
    );
    return;
  }
  expect((await request.post("/api/aanvraag", { data: null })).status()).toBe(
    400,
  );
  expect(
    (
      await request.post("/api/aanvraag", {
        data: { type: "contact", email: "invalid" },
      })
    ).status(),
  ).toBe(422);
  expect(
    (
      await request.post("/api/checkout", { data: { slug: "beginner" } })
    ).status(),
  ).toBe(422);
});

test("checkout requires terms and renders service errors", async ({ page }) => {
  await page.goto("/bestellen/beginner");
  await page.locator("#naam").fill("Test Bezoeker");
  await page.locator("#email").fill("test@example.com");
  await page.getByRole("checkbox").nth(0).check();
  await page.getByRole("button", { name: "Doorgaan naar betalen" }).click();
  await expect(page.locator("#voorwaarden-error")).toBeVisible();
  await page.route("**/api/checkout", (route) =>
    route.fulfill({
      status: 503,
      json: { error: "Online betalen is nog niet beschikbaar." },
    }),
  );
  await page.getByRole("checkbox").nth(1).check();
  await page.getByRole("button", { name: "Doorgaan naar betalen" }).click();
  await expect(page.locator("form").getByRole("alert")).toContainText(
    "Online betalen is nog niet beschikbaar.",
  );
});

test("request UI handles server success and failure", async ({ page }) => {
  await page.route("**/api/aanvraag", (route) =>
    route.fulfill({ status: 502, json: { error: "Verzenden mislukt." } }),
  );
  await page.goto("/contact");
  await page.locator("#naam").fill("Test Bezoeker");
  await page.locator("#email").fill("test@example.com");
  await page.locator("#bericht").fill("Ik wil graag informatie.");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Bericht versturen" }).click();
  await expect(page.locator("form").getByRole("alert")).toContainText(
    "Verzenden mislukt.",
  );
  await page.unroute("**/api/aanvraag");
  await page.route("**/api/aanvraag", (route) =>
    route.fulfill({ status: 200, json: { ok: true } }),
  );
  await page.getByRole("button", { name: "Bericht versturen" }).click();
  await expect(page.getByRole("status")).toContainText(
    "geen bevestigde reservering",
  );
});

test("FAQ and mobile menu work with the keyboard", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/faq");
  const menu = page.locator('button[aria-controls="mobiel-menu"]');
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  const question = page.getByRole("button", {
    name: "Hoe begin ik met een opleiding?",
  });
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("ArrowDown");
  await expect(
    page.getByRole("button", {
      name: "Wat is het verschil tussen een les en een pakket?",
    }),
  ).toBeFocused();
});

test("critical screens pass automated accessibility checks", async ({
  page,
}) => {
  for (const route of ["/", "/faq", "/reserveren", "/bestellen/beginner"]) {
    await page.goto(route);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations, route).toEqual([]);
  }
});
