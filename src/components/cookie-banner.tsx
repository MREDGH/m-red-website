"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { useLanguage } from "@/components/language-provider";

const COOKIE_CONSENT_KEY = "m-red-cookie-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-9RZYV3J5WR";

function loadGoogleAnalytics(gaId: string): void {
  if (document.querySelector(`script[src*="${gaId}"]`)) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  script.async = true;
  document.head.appendChild(script);

  const inlineScript = document.createElement("script");
  inlineScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  `;
  document.head.appendChild(inlineScript);
}

type ConsentStatus = "accepted" | "declined" | "pending";

let consentListeners: Array<() => void> = [];

function subscribeConsent(callback: () => void): () => void {
  consentListeners = [...consentListeners, callback];
  return () => {
    consentListeners = consentListeners.filter((l) => l !== callback);
  };
}

function emitConsentChange(): void {
  for (const listener of consentListeners) {
    listener();
  }
}

function getConsentStatus(): ConsentStatus {
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted") return "accepted";
  if (value === "declined") return "declined";
  return "pending";
}

const SERVER_CONSENT: ConsentStatus = "pending";

export function CookieBanner() {
  const { t } = useLanguage();
  const consentStatus = useSyncExternalStore(
    subscribeConsent,
    getConsentStatus,
    () => SERVER_CONSENT
  );

  useEffect(() => {
    if (consentStatus === "accepted") {
      loadGoogleAnalytics(GA_ID);
    }
  }, [consentStatus]);

  const handleAccept = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    emitConsentChange();
  }, []);

  const handleDecline = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    emitConsentChange();
  }, []);

  if (consentStatus !== "pending") return null;

  return (
    <div
      className="animate-slide-up fixed bottom-0 left-0 z-50 w-full border-t border-marine/10 bg-white px-6 py-4 shadow-lg md:px-12"
      role="alert"
      aria-live="polite"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-center text-sm font-light text-marine/70 md:text-left">
          {t.cookie.message}
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleDecline}
            className="rounded-sm border border-marine/20 px-5 py-2 text-xs font-medium tracking-wider uppercase text-marine/60 transition-colors hover:border-marine/40 hover:text-marine"
          >
            {t.cookie.decline}
          </button>
          <button
            onClick={handleAccept}
            className="rounded-sm bg-marine px-5 py-2 text-xs font-medium tracking-wider uppercase text-white transition-colors hover:bg-marine-light"
          >
            {t.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
