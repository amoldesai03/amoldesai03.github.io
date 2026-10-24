import { profile } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { ArrowUpRight } from "./icons";
import { LocalTime } from "./LocalTime";
import { SplitReveal } from "./SplitReveal";

const socials = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "CV", href: profile.cv },
  { label: "Detailed CV", href: profile.cvDetailed },
];

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-16 rounded-t-[2.5rem] bg-ink text-paper">
      <div className="shell pb-10 pt-24 md:pt-36">
        <p className="label text-paper/60">04 / Contact</p>
        <SplitReveal
          as="h2"
          text="Have an app that needs to be solid?"
          className="display mt-6 max-w-[16ch] text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
        />
        <FadeIn delay={0.2} className="mt-14">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex max-w-full items-center gap-4 border-b-2 border-paper/25 pb-3 transition-colors hover:border-accent"
          >
            <span className="display break-all text-[clamp(1.5rem,4.5vw,4rem)] tracking-[-0.03em] font-medium leading-none transition-colors group-hover:text-accent">
              {profile.email}
            </span>
            <ArrowUpRight className="size-[clamp(1.5rem,4vw,3.5rem)] shrink-0 transition-transform duration-500 group-hover:rotate-45 group-hover:text-accent" />
          </a>
        </FadeIn>
        <FadeIn delay={0.3} className="mt-12">
          <ul className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group inline-flex items-center gap-2 rounded-full border border-paper/30 px-5 py-3 transition-colors hover:border-accent hover:bg-accent hover:text-on-accent"
                >
                  {s.label}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
        <div className="label mt-28 flex flex-col gap-3 border-t border-paper/15 pt-6 text-paper/55 md:flex-row md:items-center md:justify-between">
          <span>&copy; 2026 {profile.name}</span>
          <LocalTime />
          <span>Built with Next.js and Motion. Hosted on GitHub Pages.</span>
          <a href="#top" className="link-underline self-start text-paper md:self-auto">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
