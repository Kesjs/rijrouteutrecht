import Link from "next/link";
import { site } from "@/data/site";

export function ContactQuick() {
  return (
    <section className="bg-pure-white py-16">
      <div className="mx-auto max-w-[1200px] px-4 text-center">
        <h2 className="text-2xl font-bold">Vragen? Neem contact op</h2>
        <p className="mt-2 text-slate">
          {site.address} · <a href={site.phoneHref}>{site.phone}</a> ·{" "}
          <a href={site.emailHref}>{site.email}</a>
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-[7.6px] bg-vivid-indigo px-[19px] py-[11px] text-pure-white"
        >
          Stuur een aanvraag
        </Link>
      </div>
    </section>
  );
}
