import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/Prose";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Hoe Vooruit Rijschool omgaat met je persoonsgegevens.",
};

// TODO: laat deze tekst valideren voor Nederland (AVG) voordat de site live gaat.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacybeleid" updated="oktober 2026">
      <p>
        {site.name} (KvK {site.kvk}, {site.address}) is verantwoordelijk voor de
        verwerking van je persoonsgegevens zoals beschreven in dit beleid.
      </p>
      <h2>Welke gegevens verzamelen we?</h2>
      <ul>
        <li>
          Naam, e-mailadres en telefoonnummer die je invult in een formulier of
          bij een bestelling.
        </li>
        <li>De inhoud van je bericht, je gekozen rijbewijs en pakket.</li>
        <li>
          Betaalgegevens verwerkt Stripe. Wij ontvangen een bevestiging van je
          betaling, maar nooit je bank- of kaartgegevens.
        </li>
      </ul>
      <h2>Waarvoor gebruiken we ze?</h2>
      <p>
        Om je aanvraag of bestelling af te handelen, contact met je op te nemen
        en onze wettelijke verplichtingen na te komen.
      </p>
      <h2>Met wie delen we ze?</h2>
      <p>
        Alleen met partijen die we nodig hebben: Stripe voor betalingen en een
        e-maildienst voor het versturen van berichten. We verkopen je gegevens
        niet.
      </p>
      <h2>Hoe lang bewaren we ze?</h2>
      <p>
        Niet langer dan nodig voor het doel, en zolang de wet dat vereist
        (bijvoorbeeld voor de administratie).
      </p>
      <h2>Je rechten</h2>
      <p>
        Je kunt je gegevens inzien, laten verbeteren of laten verwijderen en
        bezwaar maken tegen verwerking. Mail ons op{" "}
        <a href={site.emailHref} className="text-vivid-indigo underline">
          {site.email}
        </a>
        . Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.
      </p>
      <h2>Cookies</h2>
      <p>Deze site gebruikt geen tracking- of advertentiecookies.</p>
    </LegalPage>
  );
}
