"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-fog/40 bg-pure-white">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          {/* Emplacement logo: remplacer ce bloc par le logo final */}
          <span
            className="flex h-8 w-8 items-center justify-center rounded-[7.6px] bg-vivid-indigo text-sm text-pure-white"
            aria-hidden
          >
            V
          </span>
          <span>{site.name}</span>
        </Link>
        <nav
          aria-label="Hoofdnavigatie"
          className="hidden items-center gap-5 text-[14px] lg:flex"
        >
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "font-bold text-vivid-indigo"
                    : "text-graphite hover:text-vivid-indigo"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/pakketten"
            className="hidden rounded-[7.6px] bg-vivid-indigo px-[19px] py-[9px] text-[14px] font-medium text-pure-white hover:bg-[#3c3eb3] sm:inline-block"
          >
            Pakketten bekijken
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-[7.6px] border border-fog lg:hidden"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <Cross1Icon aria-hidden width={18} height={18} />
            ) : (
              <HamburgerMenuIcon aria-hidden width={18} height={18} />
            )}
          </button>
        </div>
      </div>
      <nav
        id="mobiel-menu"
        aria-label="Mobiel menu"
        hidden={!open}
        className="border-t border-fog/40 bg-pure-white lg:hidden"
      >
        <ul className="mx-auto max-w-[1200px] px-4 py-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-3 text-[17px] font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="py-3">
            <Link
              href="/reserveren"
              className="inline-flex w-full justify-center rounded-[7.6px] bg-vivid-indigo px-[19px] py-[11px] font-medium text-pure-white"
            >
              Aanvraag sturen
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
