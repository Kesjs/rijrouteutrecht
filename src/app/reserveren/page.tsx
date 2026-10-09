import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { RequestForm } from "@/components/forms/RequestForm";
import { getCategory } from "@/data/license-categories";
import { getPackage } from "@/data/packages";

export const metadata: Metadata = {
  title: "Aanvraag sturen",
  description:
    "Stuur een aanvraag voor rijlessen bij Stuurvast Rijschool. We nemen zo snel mogelijk contact met je op.",
};

export default async function ReserverenPage({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string; pakket?: string }>;
}) {
  const sp = await searchParams;
  const cat = sp.categorie
    ? getCategory(sp.categorie.toLowerCase())
    : undefined;
  const pkg = sp.pakket ? getPackage(sp.pakket) : undefined;

  return (
    <main>
      <PageHeader
        eyebrow="Aanvraag"
        title="Vertel ons wat je zoekt"
        intro="Dit is een aanvraag, geen bevestigde reservering. We nemen contact met je op om het vervolg af te spreken."
      />
      <section className="bg-frost-gray py-12">
        <div className="mx-auto max-w-2xl px-4">
          <div className="rounded-[15.2px] border border-slate bg-pure-white p-6">
            <RequestForm
              variant="reservering"
              defaultCategory={cat?.code ?? ""}
              defaultPackage={pkg?.name ?? ""}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
