"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";
import { type Language, type Translations, getTranslations } from "@/lib/translations";

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "m-red-lang";

function getStoredLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "nl" || stored === "en") {
    return stored;
  }
  return "en";
}

const SERVER_SNAPSHOT: Language = "en";

let listeners: Array<() => void> = [];

function subscribe(callback: () => void): () => void {
  listeners = [...listeners, callback];
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

function emitChange(): void {
  for (const listener of listeners) {
    listener();
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getStoredLanguage, () => SERVER_SNAPSHOT);

  const toggleLanguage = useCallback(() => {
    const next = getStoredLanguage() === "en" ? "nl" : "en";
    localStorage.setItem(STORAGE_KEY, next);
    emitChange();
  }, []);

  const t = getTranslations(lang);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
