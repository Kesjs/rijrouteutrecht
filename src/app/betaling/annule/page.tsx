import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { getPackage } from "@/data/packages";

export const metadata: Metadata = {
  title: "Betaling geannuleerd",
  robots: { index: false },
};

export default async function AnnulePage({
  searchParams,
}: {
  searchParams: Promise<{ pakket?: string }>;
}) {
  const { pakket } = await searchParams;
  const pkg = pakket ? getPackage(pakket) : undefined;
  return (
    <main className="bg-frost-gray py-16">
      <div className="mx-auto max-w-xl px-4">
        <div className="rounded-[15.2px] border border-slate bg-pure-white p-8">
          <h1 className="text-[34px] font-bold leading-[1.15]">
            Je betaling is geannuleerd
          </h1>
          <p className="mt-3 text-slate">
            Er is niets afgeschreven. Je kunt je bestelling opnieuw proberen of
            eerst een aanvraag sturen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {pkg?.payable && (
              <ButtonLink href={`/bestellen/${pkg.slug}`}>
                Terug naar bestelling
              </ButtonLink>
            )}
            <ButtonLink href="/reserveren" variant="ghost">
              Aanvraag sturen
            </ButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}
