import { Hero } from "@/components/hero";
import { Focus } from "@/components/focus";
import { Values } from "@/components/values";
import { Approach } from "@/components/approach";
import { Portal } from "@/components/portal";
import { Contact } from "@/components/contact";
import { CookieBanner } from "@/components/cookie-banner";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Focus />
        <Values />
        <Approach />
        <Portal />
        <Contact />
      </main>
      <CookieBanner />
      <BackToTop />
    </>
  );
}
