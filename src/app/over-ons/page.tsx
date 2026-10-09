import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Maak kennis met Stuurvast Rijschool in Utrecht: onze aanpak, onze werkwijze en ons werkgebied.",
};

const principes = [
  {
    title: "Helder vooraf",
    text: "Je weet wat een traject kost en wat erbij hoort. Richtprijzen zijn altijd als richtprijs gemarkeerd.",
  },
  {
    title: "Fysiek les",
    text: "Praktijklessen geven we altijd samen met een instructeur, in het echte verkeer.",
  },
  {
    title: "Eigen tempo",
    text: "Het aantal lessen dat je nodig hebt verschilt per persoon. We bouwen het traject rond jou.",
  },
];

const traject = [
  ["Kennismaken", "We bespreken je rijbewijs, ervaring, planning en wat je al weet."],
  ["Oefenen", "Je krijgt duidelijke feedback tijdens de praktijklessen en weet waar je volgende focus ligt."],
  ["Opbouwen", "We herhalen wat nodig is en maken de stappen naar het examen concreet."],
  ["Afronden", "Wanneer je klaar bent, bereiden we samen de laatste praktische stappen voor."],
];

export default function OverOnsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Over ons"
        image={{
          src: "/images/practice.webp",
          alt: "Illustratief beeld van begeleiding tijdens een rijles",
        }}
        title="Een rijschool die je traject overzichtelijk maakt"
        intro="Stuurvast Rijschool helpt je in Utrecht stap voor stap naar je rijbewijs, met duidelijke afspraken en persoonlijke begeleiding."
      />
      <Section tone="gray" title="Onze aanpak">
        <div className="grid gap-4 md:grid-cols-3">
          {principes.map((p) => (
            <div
              key={p.title}
              className="rounded-[15.2px] border border-slate bg-pure-white p-[19px]"
            >
              <h3 className="text-[19px] font-bold leading-[1.27]">
                {p.title}
              </h3>
              <p className="mt-2 text-slate">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Van eerste gesprek tot examen" intro="Een rijopleiding wordt overzichtelijker wanneer je weet wat de volgende stap is.">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {traject.map(([title, text], index) => (
            <li key={title} className="rounded-[15.2px] border border-fog/60 bg-pure-white p-5">
              <span className="text-[13px] font-bold text-vivid-indigo">0{index + 1}</span>
              <h3 className="mt-3 text-[19px] font-bold">{title}</h3>
              <p className="mt-2 text-slate">{text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="Waar we rijden">
        <p className="max-w-2xl text-slate">
          Ons werkgebied is {site.serviceArea}. Onze rijschool zit aan het{" "}
          {site.street} in {site.city}. Vraag ons gerust naar de mogelijkheden
          voor jouw woonplaats.
        </p>
      </Section>
      <Section tone="gray" title="Wat je van Stuurvast mag verwachten">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Duidelijke feedback", "Je weet na elke les wat goed ging en waar je de volgende keer op let."],
            ["Afspraken op papier", "Prijzen, voorwaarden en vervolgstappen worden vooraf helder besproken."],
            ["Aandacht voor veiligheid", "We bouwen vaardigheden rustig op, met aandacht voor risico's en zelfstandigheid."],
            ["Een aanspreekpunt", "Bij vragen over planning, pakket of examen weet je waar je terechtkunt."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[15.2px] border border-fog/60 bg-pure-white p-6">
              <h3 className="text-[19px] font-bold">{title}</h3>
              <p className="mt-2 text-slate">{text}</p>
            </article>
          ))}
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}
