import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { getStripe } from "@/lib/stripe";
import { getPackage } from "@/data/packages";
import { formatEUR } from "@/lib/format";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Betaling gelukt",
  robots: { index: false },
};

export default async function SuccesPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  if (!session_id) redirect("/pakketten");

  let paid = false;
  let pending = false;
  let pkgName = "";
  let amount = "";
  try {
    const session = await getStripe()?.checkout.sessions.retrieve(session_id);
    if (session) {
      paid = session.payment_status === "paid";
      pending =
        session.payment_status === "unpaid" && session.status === "complete";
      pkgName =
        session.metadata?.package_name ??
        getPackage(session.metadata?.slug ?? "")?.name ??
        "";
      amount = formatEUR(session.amount_total ?? 0);
    }
  } catch {
    /* état inconnu: redirection vers la page d'erreur ci-dessous */
  }
  if (!paid && !pending) redirect("/betaling/fout");

  return (
    <main className="bg-frost-gray py-16">
      <div className="mx-auto max-w-xl px-4">
        <div
          className="rounded-[15.2px] border border-success bg-pure-white p-8"
          role="status"
        >
          <h1 className="text-[34px] font-bold leading-[1.15]">
            {paid
              ? "Bedankt, je betaling is gelukt"
              : "We verwerken je betaling"}
          </h1>
          <p className="mt-3 text-slate">
            {paid
              ? "Je ontvangt zo een bevestiging per e-mail. Stuurvast neemt contact met je op om je lessen in te plannen."
              : "Je betaalmethode heeft wat meer tijd nodig. Zodra de betaling binnen is, ontvang je een bevestiging per e-mail."}
          </p>
          <dl className="mt-6 space-y-2 border-t border-fog/50 pt-4">
            {pkgName && (
              <div className="flex justify-between">
                <dt className="text-slate">Pakket</dt>
                <dd className="font-bold">{pkgName}</dd>
              </div>
            )}
            {amount && (
              <div className="flex justify-between">
                <dt className="text-slate">Bedrag</dt>
                <dd className="font-bold">{amount}</dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="text-slate">Referentie</dt>
              <dd className="font-bold">
                {session_id.slice(-10).toUpperCase()}
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-[14px] text-slate">
            Vragen? Bel{" "}
            <a href={site.phoneHref} className="font-bold text-vivid-indigo">
              {site.phone}
            </a>{" "}
            of mail{" "}
            <a href={site.emailHref} className="font-bold text-vivid-indigo">
              {site.email}
            </a>
            .
          </p>
          <ButtonLink href="/" className="mt-6">
            Terug naar home
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
