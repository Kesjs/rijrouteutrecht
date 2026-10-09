import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Maak kennis met Vooruit Rijschool in Utrecht: onze aanpak, onze werkwijze en ons werkgebied.",
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

export default function OverOnsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Over ons"
        title="Een rijschool die je traject overzichtelijk maakt"
        intro="Vooruit Rijschool helpt je in Utrecht stap voor stap naar je rijbewijs, met duidelijke afspraken en persoonlijke begeleiding."
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
      <Section title="Waar we rijden">
        <p className="max-w-2xl text-slate">
          Ons werkgebied is {site.serviceArea}. Onze rijschool zit aan het{" "}
          {site.street} in {site.city}. Vraag ons gerust naar de mogelijkheden
          voor jouw woonplaats.
        </p>
      </Section>
      <CtaBand />
    </main>
  );
}
