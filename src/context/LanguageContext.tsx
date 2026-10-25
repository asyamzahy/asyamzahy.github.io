import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { id as idLocale } from '../locales/id';
import { en as enLocale } from '../locales/en';

export type Lang = 'id' | 'en';

// Deep convert all leaf string literals to `string` so both locales are assignable
type DeepString<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepString<U>[]
    : { [K in keyof T]: DeepString<T[K]> };

export type Translations = DeepString<typeof idLocale>;

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const translations = { id: idLocale, en: enLocale } as unknown as Record<Lang, Translations>;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('portfolio-lang');
      if (saved === 'en' || saved === 'id') return saved;
    } catch {
      // localStorage not available
    }
    return 'id';
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('portfolio-lang', newLang);
    } catch {
      // localStorage not available
    }
    document.documentElement.lang = newLang;
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'id' ? 'en' : 'id');
  }, [lang, setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
