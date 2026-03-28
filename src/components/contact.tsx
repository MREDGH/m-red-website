"use client";

import { useState } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { DisclaimerModal } from "@/components/disclaimer-modal";

export function Contact() {
  const { t } = useLanguage();
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section
        id="contact"
        className="bg-offwhite px-6 py-20 md:px-12 md:py-32 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="mx-auto mb-20 max-w-2xl text-center md:mb-28">
              <h2
                className="mb-6 text-3xl font-light text-marine md:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-heading), 'Cormorant Garamond', serif" }}
              >
                {t.contact.sectionTitle}
              </h2>
              <p className="mb-8 text-base leading-relaxed font-light text-marine/70 md:text-lg">
                {t.contact.intro}
              </p>
              <a
                href="mailto:info@m-red.tech"
                className="inline-flex items-center gap-3 rounded-sm border border-marine bg-marine px-8 py-3 text-sm font-medium tracking-wider uppercase text-white transition-colors hover:bg-marine-light"
              >
                <Mail size={16} />
                {t.contact.cta}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-marine/10 bg-offwhite px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-8 md:grid-cols-3 md:gap-12">
            {/* Column 1: Company */}
            <div>
              <p
                className="mb-2 text-lg font-light text-marine"
                style={{ fontFamily: "var(--font-heading), 'Cormorant Garamond', serif" }}
              >
                M Real Estate Development
              </p>
              <p className="text-sm font-light text-marine/50">
                {t.contact.footer.tagline}
              </p>
            </div>

            {/* Column 2: Contact */}
            <div>
              <p className="mb-3 text-xs tracking-wider font-medium uppercase text-marine/40">
                {t.contact.footer.contactTitle}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:info@m-red.tech"
                  className="inline-flex items-center gap-2 text-sm font-light text-marine/60 transition-colors hover:text-marine"
                >
                  <Mail size={14} />
                  {t.contact.footer.email}
                </a>
                <a
                  href="https://www.linkedin.com/company/m-real-estate-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-light text-marine/60 transition-colors hover:text-marine"
                >
                  <ExternalLink size={14} />
                  {t.contact.footer.linkedin}
                </a>
              </div>
            </div>

            {/* Column 3: Partners */}
            <div>
              <p className="mb-3 text-xs tracking-wider font-medium uppercase text-marine/40">
                {t.contact.footer.partnersTitle}
              </p>
              <p className="text-sm font-light text-marine/60">
                {t.contact.footer.partnersDescription}
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center gap-3 border-t border-marine/10 pt-8 text-center md:flex-row md:justify-between">
            <p className="text-xs font-light text-marine/40">
              &copy; {currentYear} | M Real Estate Development B.V. | CoC:
              96705930 | VAT: NL867724316B01
            </p>
            <button
              onClick={() => setIsDisclaimerOpen(true)}
              className="text-xs font-light text-marine/40 underline underline-offset-2 transition-colors hover:text-marine/60"
            >
              {t.contact.footer.disclaimer}
            </button>
          </div>
        </div>
      </footer>

      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />
    </>
  );
}
