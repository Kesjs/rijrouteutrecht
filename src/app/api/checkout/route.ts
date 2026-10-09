import { NextResponse } from "next/server";
import { checkoutSchema, fieldErrors } from "@/lib/validation";
import { getPackage } from "@/data/packages";
import { getStripe } from "@/lib/stripe";
import { rateLimit, clientIp } from "@/lib/rate-limit";
import { site } from "@/data/site";
import { createHash } from "node:crypto";
import { getStore } from "@/lib/store";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const allowed = await rateLimit(`checkout:${clientIp(req)}`, 10);
  if (allowed === null)
    return NextResponse.json(
      { error: "Online betalen is tijdelijk niet beschikbaar." },
      { status: 503 },
    );
  if (!allowed) {
    return NextResponse.json(
      { error: "Te veel pogingen. Probeer het later opnieuw." },
      { status: 429 },
    );
  }
  const body = await req.json().catch(() => null);
  const parsed = checkoutSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { errors: fieldErrors(parsed.error) },
      { status: 422 },
    );
  if (parsed.data.website)
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  const requestId = req.headers.get("Idempotency-Key");
  if (!requestId || !/^[a-zA-Z0-9-]{16,80}$/.test(requestId)) {
    return NextResponse.json(
      { error: "Ongeldige aanvraagreferentie." },
      { status: 400 },
    );
  }

  // Le prix vient TOUJOURS des données serveur, jamais du navigateur.
  const pkg = getPackage(parsed.data.slug);
  if (!pkg || !pkg.payable) {
    return NextResponse.json(
      { error: "Dit pakket kan niet online worden besteld." },
      { status: 400 },
    );
  }

  const stripe = getStripe();
  if (
    !stripe ||
    !getStore() ||
    !process.env.RESEND_API_KEY ||
    !process.env.STRIPE_WEBHOOK_SECRET
  ) {
    return NextResponse.json(
      {
        error:
          "Online betalen is nog niet beschikbaar. Stuur ons een aanvraag.",
      },
      { status: 503 },
    );
  }

  try {
    const session = await stripe.checkout.sessions.create(
      {
        mode: "payment",
        locale: "nl",
        customer_email: parsed.data.email,
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: "eur",
              unit_amount: pkg.priceCents,
              product_data: {
                name: `${site.name}: ${pkg.name}`,
                description: pkg.description,
              },
            },
          },
        ],
        metadata: {
          slug: pkg.slug,
          package_name: pkg.name,
          expected_amount: String(pkg.priceCents),
          naam: parsed.data.naam,
          telefoon: parsed.data.telefoon ?? "",
        },
        success_url: `${site.url}/betaling/succes?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${site.url}/betaling/annule?pakket=${pkg.slug}`,
      },
      {
        idempotencyKey: `checkout/${requestId}/${createHash("sha256").update(JSON.stringify(parsed.data)).digest("hex")}`,
      },
    );
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[stripe] sessie aanmaken mislukt");
    return NextResponse.json(
      { error: "Betalen is nu niet gelukt. Probeer het later opnieuw." },
      { status: 502 },
    );
  }
}
