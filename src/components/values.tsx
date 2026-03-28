"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import {
  Heart,
  MapPin,
  BarChart3,
  Building2,
  Handshake,
  Brain,
} from "lucide-react";

const ICONS = [Heart, MapPin, BarChart3, Building2, Handshake, Brain];

function ValueCard({
  title,
  subtitle,
  description,
  readMore,
  readLess,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  description: string;
  readMore: string;
  readLess: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col rounded-sm border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/8 md:p-8">
      <div className="mb-4 flex items-center gap-3">
        <Icon className="shrink-0 text-accent" size={22} />
        <h3
          className="text-lg font-light text-white md:text-xl"
          style={{ fontFamily: "var(--font-heading), 'Cormorant Garamond', serif" }}
        >
          {title}
        </h3>
      </div>
      <p className="mb-3 text-sm font-medium tracking-wide uppercase text-accent-light">
        {subtitle}
      </p>

      <div className={`accordion-content ${isExpanded ? "open" : ""}`}>
        <div className="accordion-inner">
          <p className="pb-4 text-sm leading-relaxed font-light text-white/60">
            {description}
          </p>
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-auto self-start text-xs tracking-wider uppercase text-white/40 transition-colors hover:text-white/70"
        aria-expanded={isExpanded}
      >
        {isExpanded ? readLess : readMore}
      </button>
    </div>
  );
}

export function Values() {
  const { t } = useLanguage();

  return (
    <section
      id="values"
      className="bg-marine px-6 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-12 text-sm tracking-[0.2em] font-light uppercase text-white/40 md:mb-16 md:text-base">
            {t.values.sectionTitle}
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.values.cards.map((card, index) => (
            <RevealOnScroll key={card.title}>
              <ValueCard
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                readMore={t.values.readMore}
                readLess={t.values.readLess}
                icon={ICONS[index]}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
