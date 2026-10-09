import Link from "next/link";
import { licenseCategories } from "@/data/license-categories";

export function CategoriesPreview() {
  const preview = licenseCategories.slice(0, 6);
  return (
    <section className="bg-frost-gray py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-2xl font-bold">Kies je rijbewijs</h2>
        <p className="mt-1 text-slate">
          Richtprijzen per categorie, altijd duidelijk gelabeld.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {preview.map((cat) => (
            <Link
              key={cat.slug}
              href={`/rijbewijzen/${cat.slug}`}
              className="rounded-[15.2px] border border-slate bg-pure-white p-[19px]"
            >
              <p className="text-xs text-stone">Categorie {cat.code}</p>
              <p className="mt-1 font-bold">{cat.vehicleType}</p>
              <p className="mt-2 text-sm text-slate">{cat.shortDescription}</p>
              <p className="mt-4 text-sm font-bold text-vivid-indigo">
                Richtprijs {cat.priceLabel}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/rijbewijzen"
          className="mt-6 inline-block text-sm font-bold text-vivid-indigo"
        >
          Alle rijbewijzen bekijken →
        </Link>
      </div>
    </section>
  );
}
