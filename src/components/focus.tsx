"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

export function Focus() {
  const { t } = useLanguage();

  return (
    <section
      id="philosophy"
      className="bg-offwhite px-6 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-12 text-sm tracking-[0.2em] font-light uppercase text-marine/50 md:mb-16 md:text-base">
            {t.focus.sectionTitle}
          </p>
        </RevealOnScroll>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <RevealOnScroll>
            <div className="flex flex-col justify-center">
              <h2
                className="mb-6 text-2xl leading-tight font-light text-marine md:text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-heading), 'Cormorant Garamond', serif" }}
              >
                {t.focus.cardTitle}
              </h2>
              <p className="text-base leading-relaxed font-light text-marine/70 md:text-lg">
                {t.focus.description}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/philosophy-update.jpg"
                alt="Healthcare real estate development"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
