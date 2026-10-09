import Link from "next/link";

export function TheoryBlock() {
  return (
    <section className="bg-pure-white py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:flex md:items-center md:justify-between md:gap-12">
        <div>
          <h2 className="text-2xl font-bold">Theorie en CBR-examen</h2>
          <p className="mt-2 max-w-md text-slate">
            De theorie bereidt je voor, maar vervangt het officiële CBR-examen
            niet. Wij leggen je uit wat je waar nodig hebt — van theorie-examen
            tot praktijkexamen.
          </p>
        </div>
        <Link
          href="/theorie"
          className="mt-6 inline-block rounded-[7.6px] border border-graphite px-[19px] py-[11px] text-sm md:mt-0"
        >
          Meer over theorie
        </Link>
      </div>
    </section>
  );
}
