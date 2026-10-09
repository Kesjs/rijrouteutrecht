import Link from "next/link";
import type { LicenseCategory } from "@/data/license-categories";
import { IndicativeBadge } from "@/components/ui/Badge";

export function CategoryCard({ cat }: { cat: LicenseCategory }) {
  return (
    <Link
      href={`/rijbewijzen/${cat.slug}`}
      className="group flex flex-col rounded-[15.2px] border border-slate bg-pure-white p-[19px] transition-colors hover:bg-pale-lilac/40"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-[7.6px] bg-pale-lilac text-[17px] font-bold text-vivid-indigo">
          {cat.code}
        </span>
        <IndicativeBadge />
      </div>
      <p className="mt-4 text-[19px] font-bold leading-[1.27]">
        {cat.vehicleType}
      </p>
      <p className="mt-2 text-slate">{cat.shortDescription}</p>
      <p className="mt-auto pt-5 font-bold text-vivid-indigo">
        {cat.priceLabel}{" "}
        <span className="font-medium text-slate">richtprijs</span>
      </p>
    </Link>
  );
}
