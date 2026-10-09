import Link from "next/link";
import type { Package } from "@/data/packages";

export function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className="flex flex-col rounded-[15.2px] border border-slate bg-pure-white p-[19px]">
      <p className="text-[19px] font-bold leading-[1.27]">{pkg.name}</p>
      <p className="mt-1 text-slate">{pkg.description}</p>
      <p className="mt-4 text-[28px] font-bold leading-none">
        {pkg.priceLabel}
      </p>
      <p className="mt-1 text-[13px] text-slate">
        {pkg.duration}, inclusief btw
      </p>
      <ul className="mt-4 space-y-1 text-[14px]">
        {pkg.includes.map((i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="text-vivid-indigo">
              ✓
            </span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
      {pkg.note && (
        <p className="mt-3 rounded-[7.6px] bg-frost-gray p-3 text-[13px] text-slate">
          {pkg.note}
        </p>
      )}
      <div className="mt-auto pt-6">
        {pkg.payable ? (
          <Link
            href={`/bestellen/${pkg.slug}`}
            className="inline-flex w-full items-center justify-center rounded-[7.6px] bg-vivid-indigo px-[19px] py-[11px] font-medium text-pure-white hover:bg-[#3c3eb3]"
          >
            Bestel en betaal
          </Link>
        ) : (
          <Link
            href={`/reserveren?pakket=${pkg.slug}`}
            className="inline-flex w-full items-center justify-center rounded-[7.6px] border border-graphite px-[19px] py-[11px] font-medium hover:bg-frost-gray"
          >
            Vraag dit pakket aan
          </Link>
        )}
      </div>
    </div>
  );
}
