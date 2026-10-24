"use client";

import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { lmn8, lmn8Next } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { ArrowUpRight } from "./icons";
import { PhoneFrame } from "./PhoneFrame";
import { StoreLinks } from "./StoreLinks";

const PIN_QUERY = "(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)";

export function Lmn8Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const distance = useMotionValue(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 64px", "end end"] });
  const x = useTransform(() => -scrollYProgress.get() * distance.get());
  const height = useTransform(distance, (d) => (d > 0 ? `calc(100vh - var(--header-h) + ${d}px)` : "auto"));
  const hint = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const query = window.matchMedia(PIN_QUERY);
    const measure = () => {
      distance.set(query.matches ? Math.max(0, track.scrollWidth - viewport.clientWidth) : 0);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    query.addEventListener("change", measure);
    return () => {
      observer.disconnect();
      query.removeEventListener("change", measure);
    };
  }, [distance]);

  return (
    <>
      <motion.section
        ref={sectionRef}
        style={{ height }}
        aria-labelledby="lmn8-title"
        className="relative rounded-t-[2.5rem] bg-lmn8 text-[#f9f9f9] [--chip-hover:#2fb68d] [--chip-hover-text:#0d1729]"
      >
        <div className="pin-stage flex flex-col overflow-hidden lg:flex-row">
          <div className="shell flex shrink-0 flex-col justify-center py-16 lg:w-[40%] lg:max-w-none lg:py-10 lg:pr-0">
            <div className="label flex flex-wrap items-center gap-3 text-white/60">
              <span>{lmn8.eyebrow}</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-white">
                <span className="size-1.5 rounded-full bg-lmn8-accent [animation:pulse-dot_2s_ease-in-out_infinite]" />
                {lmn8.status}
              </span>
            </div>
            <h3 id="lmn8-title" className="mt-6">
              <span className="sr-only">{lmn8.title}</span>
              <Image src="/work/lmn8/logo.webp" alt="" width={320} height={75} className="h-auto w-[min(18rem,60%)]" />
            </h3>
            <p className="mt-5 max-w-md text-lg text-white/70">{lmn8.subtitle}</p>
            <p className="mt-5 max-w-lg leading-relaxed text-white/90">{lmn8.summary}</p>
            <ul className="mt-5 max-w-lg space-y-2 border-t border-white/15 pt-4 text-[0.9rem] text-white/85">
              {lmn8.points.map((p) => (
                <li key={p} className="grid grid-cols-[1.5rem_1fr]">
                  <span className="label pt-1 text-lmn8-accent">+</span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <StoreLinks links={lmn8.links} label={lmn8.title} />
              <a
                href={lmn8.site}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3 py-2 text-sm text-white/70 hover:text-white"
              >
                lmn8.app
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div ref={viewportRef} className="pin-viewport relative flex-1 snap-x snap-mandatory overflow-x-auto pb-16 lg:flex lg:items-center lg:pb-0">
            <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-5 px-4 sm:px-8 lg:gap-8 lg:pl-4 lg:pr-12">
              {lmn8.shots.map((shot, i) => (
                <figure
                  key={shot.src}
                  className={`w-[clamp(190px,25vh,270px)] shrink-0 snap-center ${i % 2 ? "lg:translate-y-8" : "lg:-translate-y-6"}`}
                >
                  <PhoneFrame src={shot.src} alt={`LMN8 ${shot.caption} screen`} />
                  <figcaption className="label mt-4 flex gap-3 text-white/60">
                    <span className="text-lmn8-accent">{String(i + 1).padStart(2, "0")}</span>
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </motion.div>
            <motion.span style={{ opacity: hint }} className="label pointer-events-none absolute bottom-8 right-12 hidden text-white/50 lg:block">
              Keep scrolling
            </motion.span>
          </div>
        </div>
      </motion.section>
      <Lmn8Next />
    </>
  );
}

function Lmn8Next() {
  return (
    <section
      aria-labelledby="lmn8-v2-title"
      className="bg-lmn8 text-[#f9f9f9] [--chip-hover:#2fb68d] [--chip-hover-text:#0d1729]"
    >
      <div className="shell grid gap-12 border-t border-white/10 py-20 md:py-24 lg:grid-cols-12">
        <FadeIn className="lg:col-span-5">
          <div className="label flex flex-wrap items-center gap-3 text-white/60">
            <span>{lmn8Next.eyebrow}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-white">
              <span className="size-1.5 rounded-full bg-amber-300 [animation:pulse-dot_2s_ease-in-out_infinite]" />
              {lmn8Next.status}
            </span>
          </div>
          <h3 id="lmn8-v2-title" className="display mt-6 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            {lmn8Next.title}
          </h3>
          <p className="mt-5 max-w-lg leading-relaxed text-white/85">{lmn8Next.summary}</p>
          <ul className="mt-6 max-w-lg space-y-2 border-t border-white/15 pt-4 text-[0.9rem] text-white/85">
            {lmn8Next.points.map((p) => (
              <li key={p} className="grid grid-cols-[1.5rem_1fr]">
                <span className="label pt-1 text-lmn8-accent">+</span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <StoreLinks links={[lmn8Next.link]} label="LMN8 v2" />
          </div>
        </FadeIn>
        <div className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-7">
          {lmn8Next.groups.map((group, i) => (
            <FadeIn key={group.name} delay={i * 0.08} className="rounded-2xl border border-white/10 bg-lmn8-2 p-6">
              <p className="label text-lmn8-accent">{String(i + 1).padStart(2, "0")}</p>
              <p className="display mt-3 text-xl font-semibold tracking-[-0.02em]">{group.name}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/80">
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
          <p className="label text-white/50 sm:col-span-2">On {lmn8Next.platforms}</p>
        </div>
      </div>
    </section>
  );
}
