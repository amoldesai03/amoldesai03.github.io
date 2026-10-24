"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { formatYears, introText, profile } from "@/content/site";
import { ArrowDown, ArrowUpRight } from "./icons";
import { useYears } from "./Years";

const ease = [0.22, 1, 0.36, 1] as const;

function Letters({ word, delay }: { word: string; delay: number }) {
  return (
    <span aria-hidden className="inline-flex overflow-hidden pb-[0.06em]">
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "105%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, ease, delay: delay + i * 0.045 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero({ buildYears }: { buildYears: number }) {
  const years = useYears(buildYears);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [2, -3]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-svh flex-col justify-center pb-16 pt-28">
      <div className="shell">
        <motion.div
          className="label flex justify-between border-b border-line pb-3 text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span>Portfolio / 2026</span>
          <span>{profile.location}</span>
        </motion.div>

        <div className="mt-10 grid items-center gap-14 md:mt-14 md:grid-cols-12 md:gap-10">
          <motion.div style={{ opacity: fade }} className="md:col-span-7">
            <motion.p
              className="label text-muted"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              {profile.role}
            </motion.p>
            <h1 className="display mt-4 font-semibold leading-[0.92] tracking-[-0.045em] text-[clamp(3.6rem,9vw,8rem)]">
              <span className="sr-only">{profile.name}</span>
              <span className="block">
                <Letters word="Amol" delay={0.15} />
              </span>
              <span className="flex items-end gap-[0.05em]">
                <Letters word="Desai" delay={0.3} />
                <motion.span
                  aria-hidden
                  className="mb-[0.1em] inline-block size-[0.17em] rounded-full bg-accent"
                  initial={{ scale: 0, y: "-2em" }}
                  animate={{ scale: 1, y: "0em" }}
                  transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.75 }}
                />
              </span>
            </h1>

            <motion.p
              className="mt-8 max-w-xl text-pretty text-xl leading-snug md:text-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.75 }}
            >
              {introText(years)}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.9 }}
            >
              <dl className="label grid max-w-md grid-cols-[auto_1fr] gap-x-8 gap-y-2 text-muted">
                <dt>Currently</dt>
                <dd className="text-ink">{profile.now}</dd>
                <dt>Experience</dt>
                <dd className="text-ink">{formatYears(years)} years</dd>
              </dl>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-paper transition-colors hover:bg-accent hover:text-on-accent"
                >
                  See the work
                  <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
                <a
                  href={profile.cv}
                  className="group inline-flex items-center gap-2 rounded-full border border-ink px-5 py-3 transition-colors hover:bg-ink hover:text-paper"
                >
                  View CV
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.figure
            style={{ y: photoY, rotate: photoRotate }}
            className="group relative mx-auto w-full max-w-[22rem] md:col-span-5 md:mr-0 md:max-w-[28rem]"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-35px_rgb(0_0_0/0.55)] ring-1 ring-line">
              <motion.div
                className="relative"
                initial={{ y: "101%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, ease, delay: 0.45 }}
              >
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width={896}
                  height={1120}
                  priority
                  sizes="(min-width: 768px) 28rem, 22rem"
                  className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </motion.div>
            </div>
            <figcaption className="label mt-4 flex justify-between text-muted">
              <span>{profile.name}</span>
              <span>{profile.location}</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
