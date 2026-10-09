import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { PackageCard } from "@/components/category/PackageCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Pakketten en tarieven",
  description:
    "Losse rijles, Pakket Beginner, Pakket Spoedcursus, CBR-examen en Faalangsttraining. Vaste prijzen, veilig betalen met Stripe.",
};

export default function PakkettenPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Pakketten"
        image={{
          src: "/images/packages.webp",
          alt: "Illustratief beeld van een planning voor rijlessen met autosleutels",
        }}
        title="Van een losse les tot een volledige spoedcursus"
        intro="Onze pakketten hebben een vaste prijs, inclusief btw. Bestel direct online of stuur eerst een aanvraag."
      />
      <Section tone="gray">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.slug} pkg={p} />
          ))}
        </div>
      </Section>
      <Section title="Voorwaarden bij je bestelling">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold">Betalen</h3>
            <p className="mt-1 text-slate">
              Je betaalt het hele pakket in één keer en veilig via Stripe.
              Stuurvast ziet en bewaart je bankgegevens niet.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Na je betaling</h3>
            <p className="mt-1 text-slate">
              Je krijgt direct een bevestiging per e-mail. Daarna nemen we
              contact met je op om je lessen in te plannen.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Wat je niet betaalt</h3>
            <p className="mt-1 text-slate">
              Het officiële examengeld van het CBR en de aanvraag van je
              rijbewijs bij de gemeente vallen buiten deze pakketten, tenzij het
              pakket anders vermeldt.
            </p>
          </div>
        </div>
        <p className="mt-8 text-[14px] text-slate">
          Lees ook onze{" "}
          <a
            href="/algemene-voorwaarden"
            className="font-bold text-vivid-indigo underline"
          >
            algemene voorwaarden
          </a>
          .
        </p>
      </Section>
      <CtaBand
        title="Twijfel je welk pakket past?"
        text="Vertel ons je situatie, dan adviseren we je vrijblijvend."
      />
    </main>
  );
}
