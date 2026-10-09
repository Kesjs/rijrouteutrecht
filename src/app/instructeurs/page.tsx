import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { instructors } from "@/data/instructors";

export const metadata: Metadata = {
  title: "Instructeurs",
  description:
    "Maak kennis met de instructeurs van Vooruit Rijschool in Utrecht.",
};

export default function InstructeursPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Instructeurs"
        title="De mensen naast je in de auto"
        intro="Je volgt de praktijklessen altijd samen met een instructeur."
      />
      <Section tone="gray">
        {instructors.length === 0 ? (
          <div className="max-w-xl rounded-[15.2px] border border-slate bg-pure-white p-6">
            <h2 className="text-[21px] font-bold">
              Profielen volgen binnenkort
            </h2>
            <p className="mt-2 text-slate">
              We werken aan de profielen van onze instructeurs. Wil je nu al
              weten wie je instructeur wordt? Stuur ons een bericht, dan
              vertellen we het je graag.
            </p>
            <ButtonLink href="/contact" className="mt-5">
              Neem contact op
            </ButtonLink>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((i) => (
              <article
                key={i.name}
                className="rounded-[15.2px] border border-slate bg-pure-white p-[19px]"
              >
                <h2 className="text-[19px] font-bold">{i.name}</h2>
                <p className="text-slate">{i.role}</p>
                {i.experience && (
                  <p className="mt-2 text-[14px]">{i.experience}</p>
                )}
                {i.languages && (
                  <p className="mt-1 text-[14px] text-slate">
                    Talen: {i.languages.join(", ")}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}
