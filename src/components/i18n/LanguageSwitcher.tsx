"use client";

import { localeLabels, locales, type Locale } from "@/i18n/translations";
import { useLocale } from "./LanguageProvider";

export function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { locale, setLocale } = useLocale();
  return (
    <label className={mobile ? "flex items-center justify-between gap-3 border-t border-fog/40 px-4 py-4 text-sm" : "inline-flex items-center gap-2 text-[12px] text-slate"}>
      <span className={mobile ? "font-medium" : "sr-only"}>Taal</span>
      <select
        aria-label="Taal kiezen"
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="cursor-pointer rounded-[7.6px] border border-fog/70 bg-pure-white px-2 py-1.5 text-[12px] font-medium text-graphite outline-none transition focus:border-vivid-indigo focus:ring-2 focus:ring-vivid-indigo/20"
      >
        {locales.map((item) => <option key={item} value={item}>{localeLabels[item]}</option>)}
      </select>
    </label>
  );
}
