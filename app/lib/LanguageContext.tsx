"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { type Lang, type T, translations } from "./translations";

type Ctx = { lang: Lang; t: T; setLang: (l: Lang) => void };

const LanguageContext = createContext<Ctx>({
  lang: "he",
  t: translations.he,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("he");

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try { localStorage.setItem("dl-lang", newLang); } catch {}
    document.documentElement.lang = newLang;
    document.documentElement.dir = translations[newLang].dir;
    document.documentElement.classList.remove("rtl", "ltr");
    document.documentElement.classList.add(translations[newLang].dir);
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dl-lang") as Lang | null;
      if (saved && ["he", "en", "ar"].includes(saved)) {
        setLang(saved);
        return;
      }
    } catch {}
    // default: Hebrew
    document.documentElement.lang = "he";
    document.documentElement.dir = "rtl";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
