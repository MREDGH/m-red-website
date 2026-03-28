"use client";

import { LogIn } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const DDT_URL =
  process.env.NEXT_PUBLIC_DDT_URL ||
  "https://m-red-ddt.provatoplayground.nl";

const NAV_ITEMS = [
  { key: "focus" as const, href: "#philosophy" },
  { key: "principles" as const, href: "#values" },
  { key: "approach" as const, href: "#approach" },
  { key: "contact" as const, href: "#contact" },
] as const;

export function Hero() {
  const { lang, t, toggleLanguage } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center bg-marine text-white"
    >
      {/* Login icon + Language switcher */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-2 md:top-8 md:right-8">
        <a
          href={`${DDT_URL}/login`}
          target="_blank"
          rel="noopener noreferrer"
          title="Client Portal"
          className="flex items-center justify-center rounded border border-white/30 p-1.5 text-white/80 transition-colors hover:border-white/60 hover:text-white"
          aria-label="Client Portal"
        >
          <LogIn className="h-4 w-4" />
        </a>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 rounded border border-white/30 px-3 py-1.5 text-sm font-medium tracking-wide text-white/80 transition-colors hover:border-white/60 hover:text-white"
          aria-label={`Switch to ${lang === "en" ? "Dutch" : "English"}`}
        >
          <span className={lang === "en" ? "text-white" : "text-white/50"}>
            EN
          </span>
          <span className="text-white/30">|</span>
          <span className={lang === "nl" ? "text-white" : "text-white/50"}>
            NL
          </span>
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center gap-4 px-6 text-center">
        <h1
          className="font-heading text-[8rem] leading-none font-light tracking-tight md:text-[12rem]"
          style={{ fontFamily: "var(--font-heading), 'Cormorant Garamond', serif" }}
        >
          M
        </h1>
        <p className="text-sm tracking-[0.35em] font-light uppercase text-white/70 md:text-base md:tracking-[0.45em]">
          {t.hero.subtitle}
        </p>
      </div>

      {/* Navigation */}
      <nav
        className="absolute bottom-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 md:bottom-16 md:gap-x-10"
        aria-label="Page navigation"
      >
        {NAV_ITEMS.map(({ key, href }) => (
          <a
            key={key}
            href={href}
            className="text-xs tracking-[0.2em] font-light uppercase text-white/60 transition-colors hover:text-white md:text-sm md:tracking-[0.25em]"
          >
            {t.nav[key]}
          </a>
        ))}
      </nav>
    </section>
  );
}
