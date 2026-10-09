import Link from "next/link";
import { packages } from "@/data/packages";
import { ButtonLink } from "@/components/ui/Button";

export function PackagesPreview() {
  return (
    <section className="bg-pure-white py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-[32px] font-bold tracking-[-0.035em] sm:text-[42px]">
          Een duidelijk plan. Inzicht in de prijs.
        </h2>
        <p className="mt-1 text-slate">
          Van een losse les tot een volledige spoedcursus.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {packages.slice(0, 3).map((pkg) => (
            <div
              key={pkg.slug}
              className={`flex flex-col rounded-[15.2px] border p-6 ${pkg.slug === "beginner" ? "border-vivid-indigo bg-pale-lilac/35" : "border-fog/40"}`}
            >
              <p className="font-bold">{pkg.name}</p>
              <p className="mt-2 text-sm text-slate">{pkg.description}</p>
              <p className="mt-6 text-[32px] font-bold tracking-[-0.03em]">
                {pkg.priceLabel}
              </p>
              <p className="mt-1 text-[13px] text-slate">
                {pkg.duration}, inclusief btw
              </p>
              <ButtonLink
                href={`/bestellen/${pkg.slug}`}
                variant={pkg.slug === "beginner" ? "primary" : "ghost"}
                className="mt-7 w-full"
              >
                Bekijk dit pakket
              </ButtonLink>
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
