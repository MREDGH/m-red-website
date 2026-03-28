"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { cn } from "@/lib/utils";

function AccordionItem({
  number,
  title,
  content,
  isOpen,
  onToggle,
}: {
  number: string;
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-marine/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 py-5 text-left transition-colors md:py-6"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-light text-accent">{number}</span>
        <span
          className="flex-1 text-lg font-light text-marine md:text-xl"
          style={{ fontFamily: "var(--font-heading), 'Cormorant Garamond', serif" }}
        >
          {title}
        </span>
        <ChevronDown
          className={cn(
            "shrink-0 text-marine/40 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
          size={20}
        />
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-inner">
          <p className="pb-6 pl-8 text-sm leading-relaxed font-light text-marine/60 md:text-base">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Approach() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="approach"
      className="bg-offwhite px-6 py-20 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-12 text-sm tracking-[0.2em] font-light uppercase text-marine/50 md:mb-16 md:text-base">
            {t.approach.sectionTitle}
          </p>
        </RevealOnScroll>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <RevealOnScroll>
            <div className="flex flex-col justify-start">
              <h2
                className="mb-6 text-2xl leading-tight font-light text-marine md:text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-heading), 'Cormorant Garamond', serif" }}
              >
                {t.approach.subtitle}
              </h2>
              <p className="text-base leading-relaxed font-light text-marine/70 md:text-lg">
                {t.approach.intro}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div>
              {t.approach.steps.map((step, index) => (
                <AccordionItem
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  content={step.content}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
