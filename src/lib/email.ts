import { Resend } from "resend";
import { site } from "@/data/site";
import { createHash } from "node:crypto";
import { getStore } from "@/lib/store";

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const from = () => process.env.EMAIL_FROM ?? `${site.name} <${site.email}>`;
const inbox = () => process.env.EMAIL_TO ?? site.email;

async function send(
  opts: { to: string; subject: string; html: string; replyTo?: string },
  idempotencyKey: string,
) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[email] verzending niet geconfigureerd");
    return { ok: false as const };
  }
  try {
    const { error } = await new Resend(key).emails.send(
      {
        from: from(),
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
        replyTo: opts.replyTo,
      },
      { idempotencyKey },
    );
    if (error) {
      console.error("[email] verzenden mislukt");
      return { ok: false as const };
    }
    return { ok: true as const };
  } catch {
    console.error("[email] verbinding mislukt");
    return { ok: false as const };
  }
}

const wrap = (body: string) =>
  `<div style="font-family:Inter,Arial,sans-serif;color:#222;max-width:560px;line-height:1.5">${body}
  <hr style="border:none;border-top:1px solid #eaeaf7;margin:24px 0"/>
  <p style="color:#686878;font-size:13px">${esc(site.name)} · ${esc(site.address)} · ${esc(site.phone)} · ${esc(site.email)}</p></div>`;

const rows = (items: [string, string][]) =>
  `<table style="border-collapse:collapse;width:100%">${items
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#686878;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:6px 0">${esc(v)}</td></tr>`,
    )
    .join("")}</table>`;

export async function sendRequestEmails(d: {
  type: string;
  naam: string;
  email: string;
  telefoon: string;
  categorie: string;
  pakket: string;
  bericht: string;
}) {
  const key = createHash("sha256").update(JSON.stringify(d)).digest("hex");
  const label =
    d.type === "reservering" ? "Nieuwe aanvraag" : "Nieuw contactbericht";
  const internal = await send(
    {
      to: inbox(),
      replyTo: d.email,
      subject: `${label} van ${d.naam}`,
      html: wrap(
        `<h2>${label}</h2>${rows([
          ["Naam", d.naam],
          ["E-mail", d.email],
          ["Telefoon", d.telefoon],
          ["Rijbewijs", d.categorie],
          ["Pakket", d.pakket],
          ["Bericht", d.bericht],
        ])}`,
      ),
    },
    `request/${key}/internal`,
  );
  if (!internal.ok) return false;
  const visitor = await send(
    {
      to: d.email,
      subject: "We hebben je aanvraag ontvangen",
      html: wrap(
        `<h2>Bedankt, ${esc(d.naam)}</h2>
      <p>We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.
      Dit is een aanvraag, nog geen bevestigde reservering.</p>
      <p style="color:#686878">Jouw bericht:</p><p>${esc(d.bericht)}</p>`,
      ),
    },
    `request/${key}/visitor`,
  );
  return visitor.ok;
}

export async function sendPaymentEmails(d: {
  naam: string;
  email: string;
  telefoon: string;
  pakket: string;
  bedrag: string;
  referentie: string;
  sessionId: string;
}) {
  const store = getStore();
  if (!store) return false;
  const deliver = async (kind: string, opts: Parameters<typeof send>[0]) => {
    const key = `vooruit:payment:${d.sessionId}:${kind}`;
    if (await store.get(key)) return true;
    const result = await send(opts, `payment/${d.sessionId}/${kind}`);
    if (!result.ok) return false;
    await store.set(key, true);
    return true;
  };
  const visitor = await deliver("visitor", {
    to: d.email,
    subject: `Betaling ontvangen: ${d.pakket}`,
    html: wrap(
      `<h2>Bedankt voor je betaling, ${esc(d.naam)}</h2>
      <p>We hebben je betaling ontvangen. Stuurvast neemt contact met je op om de lessen in te plannen.</p>
      ${rows([
        ["Pakket", d.pakket],
        ["Bedrag", d.bedrag],
        ["Referentie", d.referentie],
      ])}`,
    ),
  });
  if (!visitor) return false;
  const internal = await deliver("internal", {
    to: inbox(),
    replyTo: d.email,
    subject: `Betaald: ${d.pakket} (${d.naam})`,
    html: wrap(
      `<h2>Nieuwe betaling</h2>${rows([
        ["Naam", d.naam],
        ["E-mail", d.email],
        ["Telefoon", d.telefoon],
        ["Pakket", d.pakket],
        ["Bedrag", d.bedrag],
        ["Referentie", d.referentie],
      ])}<p>Neem contact op met de klant om de lessen in te plannen.</p>`,
    ),
  });
  return internal;
}
