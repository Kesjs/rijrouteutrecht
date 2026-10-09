"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Locale, locales, translate } from "@/i18n/translations";

const STORAGE_KEY = "stuurvast-locale";
const LocaleContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({
  locale: "nl",
  setLocale: () => undefined,
});

function translateAttributes(root: HTMLElement, locale: Locale) {
  root.querySelectorAll<HTMLElement>("[aria-label], [placeholder], [title]").forEach((element) => {
    for (const attribute of ["aria-label", "placeholder", "title"] as const) {
      const value = element.getAttribute(attribute);
      if (!value) continue;
      const original = element.dataset[`original${attribute.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}`];
      if (!original) element.dataset[`original${attribute.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}`] = value;
      const source = original ?? value;
      element.setAttribute(attribute, translate(source, locale));
    }
  });
}

function translateDom(locale: Locale) {
  const root = document.body;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName)) continue;
    nodes.push(node as Text);
  }
  nodes.forEach((textNode) => {
    const raw = textNode.textContent ?? "";
    const trimmed = raw.trim();
    if (!trimmed) return;
    const original = (textNode as Text & { __nl?: string }).__nl ?? trimmed;
    (textNode as Text & { __nl?: string }).__nl = original;
    const translated = translate(original, locale);
    if (translated !== original) {
      const start = raw.indexOf(trimmed);
      textNode.textContent = `${raw.slice(0, start)}${translated}${raw.slice(start + trimmed.length)}`;
    }
  });
  translateAttributes(root, locale);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("nl");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && locales.includes(stored)) setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    translateDom(locale);
    const observer = new MutationObserver(() => translateDom(locale));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale: (next: Locale) => {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.cookie = `${STORAGE_KEY}=${next};path=/;max-age=31536000;samesite=lax`;
      setLocaleState(next);
    },
  }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
