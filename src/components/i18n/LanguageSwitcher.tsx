"use client";

import { localeLabels, locales, type Locale } from "@/i18n/translations";
import { useLocale } from "./LanguageProvider";
import Image from "next/image";

export function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { locale, setLocale } = useLocale();
  return (
    <label className={mobile ? "flex items-center justify-between gap-3 border-t border-fog/40 px-4 py-4 text-sm" : "inline-flex items-center gap-2 text-[12px] text-slate"}>
      <span className={mobile ? "flex items-center gap-2 font-medium" : "sr-only"}>
        {mobile && <Image src="/brand/stuurvast-logo-mark.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />}
        Taal
      </span>
      <select
        aria-label="Taal kiezen"
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="cursor-pointer rounded-[7.6px] border border-vivid-indigo bg-vivid-indigo px-2 py-1.5 text-[12px] font-medium text-pure-white outline-none transition hover:bg-[#3c3eb3] focus:border-vivid-indigo focus:ring-2 focus:ring-vivid-indigo/20"
      >
        {locales.map((item) => <option key={item} value={item}>{localeLabels[item]}</option>)}
      </select>
    </label>
  );
}
