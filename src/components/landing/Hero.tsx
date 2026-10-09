import Link from "next/link";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="dot-grid bg-pure-white">
      <div className="mx-auto max-w-[1200px] px-4 py-20 text-center">
        <span className="inline-block rounded-[35.8px] bg-frost-gray px-[15px] py-[4px] text-sm text-graphite">
          Rijschool in {site.serviceArea}
        </span>
        <h1 className="mx-auto mt-6 max-w-2xl text-[36px] font-bold leading-[1.1] sm:text-[46px]">
          {site.tagline}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate">
          Praktijklessen bij een echte instructeur, duidelijke prijzen per
          rijbewijs en een overzicht van je hele traject naar het CBR-examen.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/rijbewijzen"
            className="rounded-[7.6px] bg-vivid-indigo px-[19px] py-[11px] text-pure-white"
          >
            Bekijk rijbewijzen
          </Link>
          <Link
            href="/pakketten"
            className="rounded-[7.6px] border border-graphite px-[19px] py-[11px] text-graphite"
          >
            Bekijk pakketten
          </Link>
        </div>
      </div>
    </section>
  );
}
