"use client";

import { LogIn } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

const DDT_URL =
  process.env.NEXT_PUBLIC_DDT_URL || "https://m-red-ddt.provatoplayground.nl";

export function Portal() {
  const { t } = useLanguage();

  return (
    <section
      id="portal"
      className="bg-marine px-6 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <RevealOnScroll className="flex flex-col items-center">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5">
            <LogIn className="text-white/70" size={28} />
          </div>

          <p className="mb-4 text-sm tracking-[0.2em] font-light uppercase text-white/40">
            {t.portal.sectionTitle}
          </p>

          <p className="mb-10 max-w-xl text-base leading-relaxed font-light text-white/60 md:text-lg">
            {t.portal.description}
          </p>

          <a
            href={`${DDT_URL}/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-8 py-3 text-sm font-medium tracking-wider uppercase text-white transition-colors hover:bg-accent-light"
          >
            <LogIn size={16} />
            {t.portal.cta}
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
