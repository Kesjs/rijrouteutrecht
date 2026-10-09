import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/Prose";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "De algemene voorwaarden van Vooruit Rijschool.",
};

// TODO: laat deze tekst juridisch valideren (herroepingsrecht, annulering, restitutie) voordat de site live gaat.
export default function VoorwaardenPage() {
  return (
    <LegalPage title="Algemene voorwaarden" updated="oktober 2026">
      <h2>Wie zijn wij?</h2>
      <p>
        {site.name}, {site.address}, KvK {site.kvk}, e-mail {site.email},
        telefoon {site.phone}.
      </p>
      <h2>Aanbod en prijzen</h2>
      <p>
        De prijzen van onze pakketten zijn in euro en inclusief btw. Prijzen per
        rijbewijs op de site zijn richtprijzen en geen aanbod. Het uiteindelijke
        bedrag hangt af van je niveau en het aantal lessen.
      </p>
      <h2>Wat je koopt</h2>
      <p>
        Je koopt rijlessen en bijbehorende diensten. Vooruit verkoopt geen
        rijbewijs en kan het slagen voor een examen niet garanderen. Examens en
        de uitgifte van het rijbewijs lopen via het CBR en de gemeente.
      </p>
      <h2>Bestellen en betalen</h2>
      <p>
        Je betaalt het pakket in één keer via Stripe. Na betaling ontvang je een
        bevestiging per e-mail en nemen wij contact met je op om de lessen in te
        plannen.
      </p>
      <h2>Annuleren en restitutie</h2>
      <p>
        Annuleren en herroepen is mogelijk volgens de wet. Lessen die al zijn
        gevolgd, worden in rekening gebracht. Neem voor een annulering contact
        met ons op via {site.email}.
      </p>
      <h2>Aansprakelijkheid</h2>
      <p>
        Vooruit is niet aansprakelijk voor schade die voortvloeit uit
        omstandigheden buiten onze invloed, behalve voor zover de wet dit
        toelaat.
      </p>
      <h2>Klachten</h2>
      <p>Heb je een klacht? Mail ons, dan reageren we zo snel mogelijk.</p>
    </LegalPage>
  );
}
