import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

await mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
try {
  const page = await browser.newPage();
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("http://localhost:3187/rijbewijzen");
    if (!(await page.title()).includes("Vooruit Rijschool")) throw new Error("Wrong preview server");
    await page.screenshot({ path: `artifacts/catalog-${width}.png`, fullPage: true });
  }
  await page.getByRole("link", { name: "Aanvraag sturen", exact: true }).focus();
  console.log(await page.evaluate(() => {
    const focus = getComputedStyle(document.activeElement);
    return { focusOutline: focus.outlineStyle, outlineWidth: focus.outlineWidth };
  }));
} finally {
  await browser.close();
}
