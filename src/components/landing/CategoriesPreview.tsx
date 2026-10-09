import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { licenseCategories } from "@/data/license-categories";

export function CategoriesPreview() {
  const car = licenseCategories.find((cat) => cat.slug === "b")!;
  const featured = licenseCategories.filter((cat) =>
    ["am", "a"].includes(cat.slug),
  );
  const others = licenseCategories.filter((cat) =>
    ["be", "c", "d", "t"].includes(cat.slug),
  );
  return (
    <section className="bg-pure-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <h2 className="text-[32px] font-bold tracking-[-0.035em] sm:text-[42px]">
          Welke kant wil jij op?
        </h2>
        <p className="mt-3 max-w-xl text-[16px] text-slate">
          Een auto, een scooter of iets groters. Bekijk het rijbewijs dat past
          bij jouw plannen.
        </p>
        <div className="mt-9 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <Link
            href="/rijbewijzen/b"
            className="group overflow-hidden rounded-[15.2px] border border-fog/40"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-frost-gray">
              <Image
                src="/images/hero.webp"
                alt=""
                fill
                sizes="(max-width:1023px) 100vw, 50vw"
                className="object-cover object-[70%_center] transition-transform duration-500 group-hover:scale-[1.025]"
              />
            </div>
            <div className="p-6">
              <p className="text-[13px] font-bold text-vivid-indigo">
                Rijbewijs {car.code}
              </p>
              <h3 className="mt-2 text-[26px] font-bold">
                Vrijheid op vier wielen
              </h3>
              <p className="mt-2 text-slate">
                Je eerste autorijbewijs, stap voor stap.
              </p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-[14px] text-slate">
                  Richtprijs{" "}
                  <span className="font-bold text-midnight-ink">
                    {car.priceLabel}
                  </span>
                </p>
                <ArrowRightIcon
                  aria-hidden
                  className="h-5 w-5 text-vivid-indigo"
                />
              </div>
            </div>
          </Link>
          <div className="grid gap-5">
            {featured.map((cat) => (
              <Link
                key={cat.slug}
                href={`/rijbewijzen/${cat.slug}`}
                className="group grid grid-cols-[0.85fr_1fr] overflow-hidden rounded-[15.2px] border border-fog/40"
              >
                <div className="relative min-h-44 overflow-hidden bg-frost-gray">
                  <Image
                    src={`/images/${cat.slug === "am" ? "scooter" : "motor"}.webp`}
                    alt=""
                    fill
                    sizes="(max-width:1023px) 45vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex flex-col justify-center p-4 sm:p-6">
                  <p className="text-[13px] font-bold text-vivid-indigo">
                    Rijbewijs {cat.code}
                  </p>
                  <h3 className="mt-2 text-[21px] font-bold">
                    {cat.vehicleType}
                  </h3>
                  <p className="mt-2 text-[14px] text-slate">
                    {cat.shortDescription}
                  </p>
                  <p className="mt-4 text-[14px] text-slate">
                    Richtprijs{" "}
                    <span className="font-bold text-midnight-ink">
                      {cat.priceLabel}
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((cat) => (
            <Link
              key={cat.slug}
              href={`/rijbewijzen/${cat.slug}`}
              className="flex items-center gap-3 rounded-[7.6px] border border-fog/40 px-4 py-4 hover:border-vivid-indigo"
            >
              <span className="font-bold text-vivid-indigo">{cat.code}</span>
              <span className="text-[14px]">{cat.vehicleType}</span>
              <ArrowRightIcon
                aria-hidden
                className="ml-auto shrink-0 text-vivid-indigo"
              />
            </Link>
          ))}
        </div>
        <Link
          href="/rijbewijzen"
          className="mt-6 inline-block text-sm font-bold text-vivid-indigo"
        >
          Vergelijk alle rijbewijzen →
        </Link>
      </div>
    </section>
  );
}
