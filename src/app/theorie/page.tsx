import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Theorie en CBR",
  description:
    "Hoe werken theorie en het CBR-examen? Lees wat je moet weten voordat je aan je praktijklessen begint.",
};

const stappen = [
  {
    title: "Theorie-examen",
    text: "Je leert de verkeersregels en verkeersborden en legt het theorie-examen af bij het CBR.",
  },
  {
    title: "Praktijklessen",
    text: "Je oefent fysiek met een instructeur. Online lessen vervangen dit niet.",
  },
  {
    title: "Praktijkexamen",
    text: "Je rijdt het praktijkexamen bij het CBR, met een examinator in de auto.",
  },
  {
    title: "Rijbewijs aanvragen",
    text: "Na je examen vraag je het rijbewijs aan bij de gemeente.",
  },
];

export default function TheoriePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Theorie en CBR"
        title="Theorie bereidt je voor, het CBR beslist"
        intro="Online leren helpt je voorbereiden, maar het officiële examen leg je altijd af bij het CBR."
      >
        <ButtonLink href="/reserveren">
          Vraag naar theorie-ondersteuning
        </ButtonLink>
      </PageHeader>
      <Section
        tone="gray"
        title="Het traject naar je rijbewijs"
        intro="Vooruit verzorgt de praktijklessen en begeleidt je door de stappen eromheen."
      >
        <ol className="grid gap-4 md:grid-cols-2">
          {stappen.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-4 rounded-[15.2px] border border-slate bg-pure-white p-[19px]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[35.8px] bg-pale-lilac font-bold text-vivid-indigo">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold">{s.title}</h3>
                <p className="mt-1 text-slate">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="Wat bieden we aan?">
        <div className="max-w-2xl space-y-3 text-slate">
          <p>
            We helpen je graag met het plannen van je theorie en examens. Welke
            theorie-ondersteuning we precies aanbieden, bespreken we met je
            tijdens de intake. Een online quiz of oefenmateriaal tonen we pas op
            de site wanneer dat echt beschikbaar is.
          </p>
          <p>
            Het officiële CBR-examen vervangen we niet. De examens en de uitslag
            blijven altijd bij het CBR.
          </p>
        </div>
      </Section>
      <CtaBand
        title="Vragen over theorie of examen?"
        text="Stuur ons een bericht en we leggen je stap voor stap uit wat je nodig hebt."
      />
    </main>
  );
}
