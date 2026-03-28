import { describe, it, expect } from "vitest";
import { getTranslations, type Language } from "./translations";

describe("translations", () => {
  it("should return English translations for 'en'", () => {
    const t = getTranslations("en");
    expect(t.nav.focus).toBe("Focus");
    expect(t.hero.subtitle).toBe("Real Estate Development");
    expect(t.focus.sectionTitle).toBe("Our Focus");
  });

  it("should return Dutch translations for 'nl'", () => {
    const t = getTranslations("nl");
    expect(t.nav.principles).toBe("Principes");
    expect(t.focus.sectionTitle).toBe("Onze Focus");
    expect(t.approach.sectionTitle).toBe("Onze Aanpak");
  });

  it("should have 6 value cards in both languages", () => {
    const en = getTranslations("en");
    const nl = getTranslations("nl");
    expect(en.values.cards).toHaveLength(6);
    expect(nl.values.cards).toHaveLength(6);
  });

  it("should have 3 approach steps in both languages", () => {
    const en = getTranslations("en");
    const nl = getTranslations("nl");
    expect(en.approach.steps).toHaveLength(3);
    expect(nl.approach.steps).toHaveLength(3);
  });

  it("should have all required nav keys", () => {
    const requiredKeys: Array<keyof ReturnType<typeof getTranslations>["nav"]> = [
      "focus",
      "principles",
      "approach",
      "portal",
      "contact",
    ];
    for (const lang of ["en", "nl"] as Language[]) {
      const t = getTranslations(lang);
      for (const key of requiredKeys) {
        expect(t.nav[key]).toBeTruthy();
      }
    }
  });

  it("should have matching card count between EN and NL", () => {
    const en = getTranslations("en");
    const nl = getTranslations("nl");
    expect(en.values.cards.length).toBe(nl.values.cards.length);
  });

  it("should have non-empty descriptions for all value cards", () => {
    for (const lang of ["en", "nl"] as Language[]) {
      const t = getTranslations(lang);
      for (const card of t.values.cards) {
        expect(card.title.length).toBeGreaterThan(0);
        expect(card.subtitle.length).toBeGreaterThan(0);
        expect(card.description.length).toBeGreaterThan(0);
      }
    }
  });

  it("should include correct footer info", () => {
    const en = getTranslations("en");
    expect(en.contact.footer.email).toBe("info@m-red.tech");
  });
});
