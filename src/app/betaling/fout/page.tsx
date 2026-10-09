import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Betaling niet gelukt",
  robots: { index: false },
};

export default function FoutPage() {
  return (
    <main className="bg-frost-gray py-16">
      <div className="mx-auto max-w-xl px-4">
        <div
          className="rounded-[15.2px] border border-error bg-pure-white p-8"
          role="alert"
        >
          <h1 className="text-[34px] font-bold leading-[1.15]">
            Je betaling is niet gelukt
          </h1>
          <p className="mt-3 text-slate">
            We konden je betaling niet bevestigen. Controleer of er geld is
            afgeschreven voordat je opnieuw probeert. Twijfel je? Bel{" "}
            <a href={site.phoneHref} className="font-bold text-vivid-indigo">
              {site.phone}
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/pakketten">Opnieuw proberen</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Contact opnemen
            </ButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}
