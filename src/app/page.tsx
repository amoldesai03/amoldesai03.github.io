import { AppIndex } from "@/components/AppIndex";
import { Archive } from "@/components/Archive";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FestivShowcase } from "@/components/FestivShowcase";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Lmn8Showcase } from "@/components/Lmn8Showcase";
import { Marquee } from "@/components/Marquee";
import { Metrics } from "@/components/Metrics";
import { MobileBanking } from "@/components/MobileBanking";
import { SectionHead } from "@/components/SectionHead";
import { Skills } from "@/components/Skills";
import { marquee, yearsOfExperience } from "@/content/site";

export default function Home() {
  const buildYears = yearsOfExperience();
  return (
    <>
      <a
        href="#work"
        className="label sr-only z-50 rounded-full bg-accent px-4 py-2 text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to work
      </a>
      <Header />
      <main>
        <Hero buildYears={buildYears} />
        <Marquee items={marquee} />
        <Metrics buildYears={buildYears} />
        <section id="work" aria-label="Selected work" className="scroll-mt-16">
          <div className="shell">
            <SectionHead index="01" title="Selected work" note="Banking apps in production, apps on the Play Store and the work behind the numbers." />
            <MobileBanking />
            <AppIndex />
          </div>
          <Lmn8Showcase />
          <FestivShowcase />
          <div className="shell">
            <Archive />
          </div>
        </section>
        <Experience />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
