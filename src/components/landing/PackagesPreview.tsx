import Link from "next/link";
import { packages } from "@/data/packages";

export function PackagesPreview() {
  return (
    <section className="bg-pure-white py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-2xl font-bold">Onze pakketten</h2>
        <p className="mt-1 text-slate">
          Van een losse les tot een volledige spoedcursus.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {packages.slice(0, 3).map((pkg) => (
            <div
              key={pkg.slug}
              className="rounded-[15.2px] border border-slate p-[19px]"
            >
              <p className="font-bold">{pkg.name}</p>
              <p className="mt-2 text-sm text-slate">{pkg.description}</p>
              <p className="mt-4 text-lg font-bold">{pkg.priceLabel}</p>
            </div>
          ))}
        </div>
        <Link
          href="/pakketten"
          className="mt-6 inline-block text-sm font-bold text-vivid-indigo"
        >
          Alle pakketten en prijzen →
        </Link>
      </div>
    </section>
  );
}
