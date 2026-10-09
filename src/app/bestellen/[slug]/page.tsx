import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { CheckoutForm } from "@/components/forms/CheckoutForm";
import { getPackage, packages } from "@/data/packages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return packages.filter((p) => p.payable).map((p) => ({ slug: p.slug }));
}

export const metadata: Metadata = {
  title: "Bestelling afronden",
  robots: { index: false },
};

export default async function BestellenPage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();
  if (!pkg.payable) redirect(`/reserveren?pakket=${pkg.slug}`);

  return (
    <main>
      <PageHeader
        eyebrow="Bestelling"
        title="Controleer je bestelling"
        intro="Vul je gegevens in. Daarna ga je naar de beveiligde betaalpagina van Stripe."
      />
      <section className="bg-frost-gray py-12">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 lg:grid-cols-[1fr_380px]">
          <div className="rounded-[15.2px] border border-slate bg-pure-white p-6">
            <h2 className="mb-5 text-[21px] font-bold">Jouw gegevens</h2>
            <CheckoutForm slug={pkg.slug} />
          </div>
          <aside
            aria-labelledby="samenvatting"
            className="h-fit rounded-[15.2px] border border-slate bg-pure-white p-6"
          >
            <h2 id="samenvatting" className="text-[21px] font-bold">
              Samenvatting
            </h2>
            <p className="mt-4 font-bold">{pkg.name}</p>
            <p className="text-slate">{pkg.description}</p>
            <p className="mt-1 text-[14px] text-slate">{pkg.duration}</p>
            <ul className="mt-4 space-y-1 text-[14px]">
              {pkg.includes.map((i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-vivid-indigo">
                    ✓
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-baseline justify-between border-t border-fog/50 pt-4">
              <span className="font-bold">Totaal (incl. btw)</span>
              <span className="text-[28px] font-bold">{pkg.priceLabel}</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
