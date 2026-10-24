"use client";

import { motion } from "motion/react";
import { mobileBanking } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { StoreLinks } from "./StoreLinks";

const ease = [0.22, 1, 0.36, 1] as const;

const nodes = [
  { x: 20, y: 20, w: 250, kicker: "Android", title: "Jetpack Compose", delay: 0.5 },
  { x: 290, y: 20, w: 250, kicker: "iOS", title: "SwiftUI", delay: 0.6 },
  { x: 20, y: 446, w: 160, kicker: "Ships as", title: "Template app", delay: 1.1 },
  { x: 200, y: 446, w: 160, kicker: "Ships as", title: "SaaS", delay: 1.2 },
  { x: 380, y: 446, w: 160, kicker: "Ships as", title: "SDK", delay: 1.3 },
];

const wires = [
  "M200 210 C200 160 145 160 145 104",
  "M360 210 C360 160 415 160 415 104",
  "M160 350 C160 400 100 400 100 446",
  "M280 350 L280 446",
  "M400 350 C400 400 460 400 460 446",
];

function Diagram() {
  return (
    <svg viewBox="0 0 560 550" className="h-auto w-full" role="img" aria-labelledby="mb-diagram-title">
      <title id="mb-diagram-title">
        One shared Kotlin Multiplatform core with per-bank widgets, products and remote config feeds Compose on Android and SwiftUI on iOS, and ships as a template app, as SaaS or as an SDK.
      </title>
      {wires.map((d, i) => (
        <g key={d}>
          <motion.path
            d={d}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.35}
            strokeWidth={1.5}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.12 }}
          />
          <motion.path
            d={d}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={2.5}
            strokeDasharray="4 10"
            strokeLinecap="round"
            style={{ animation: "flow 1.1s linear infinite" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, delay: 1.3 + i * 0.1 }}
          />
        </g>
      ))}

      <motion.g
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
        style={{ transformOrigin: "280px 280px" }}
      >
        <rect x="40" y="210" width="480" height="140" rx="18" fill="var(--accent)" />
        <text x="66" y="246" fill="var(--on-accent)" style={{ fontFamily: "var(--font-code)" }} fontSize="12" letterSpacing="1.2">
          SHARED KOTLIN MULTIPLATFORM CORE
        </text>
        <text x="64" y="292" fill="var(--on-accent)" fontSize="36" fontWeight="650" style={{ fontFamily: "var(--font-display)" }} letterSpacing="-1">
          Business logic, once
        </text>
        <text x="66" y="326" fill="var(--on-accent)" style={{ fontFamily: "var(--font-code)" }} fontSize="12" letterSpacing="1.2">
          WIDGETS / PRODUCTS / REMOTE CONFIG PER BANK
        </text>
      </motion.g>

      {nodes.map((n) => (
        <motion.g
          key={n.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.7, ease, delay: n.delay }}
        >
          <rect x={n.x} y={n.y} width={n.w} height="84" rx="14" fill="var(--paper)" stroke="currentColor" strokeOpacity={0.25} />
          <text x={n.x + 18} y={n.y + 30} fill="var(--muted)" style={{ fontFamily: "var(--font-code)" }} fontSize="11" letterSpacing="1.2">
            {n.kicker.toUpperCase()}
          </text>
          <text x={n.x + 18} y={n.y + 62} fill="currentColor" fontSize={n.w < 200 ? 20 : 24} fontWeight="600">
            {n.title}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

export function MobileBanking() {
  return (
    <article className="grid gap-12 border-b border-line py-16 md:py-24 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        <FadeIn>
          <div className="label flex flex-wrap items-center gap-3 text-muted">
            <span>{mobileBanking.eyebrow}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-ink">
              <span className="size-1.5 rounded-full bg-accent [animation:pulse-dot_2s_ease-in-out_infinite]" />
              {mobileBanking.status}
            </span>
          </div>
          <h3 className="display mt-6 text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">{mobileBanking.title}</h3>
          <p className="mt-3 text-xl text-muted md:text-2xl">{mobileBanking.subtitle}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-prose text-lg leading-relaxed">{mobileBanking.summary}</p>
          <ul className="mt-8 space-y-3 border-t border-line pt-6">
            {mobileBanking.points.map((p) => (
              <li key={p} className="grid grid-cols-[1.5rem_1fr] text-[0.95rem]">
                <span className="label pt-1 text-accent">+</span>
                {p}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.15} className="mt-10 space-y-4">
          {mobileBanking.banks.map((bank) => (
            <div key={bank.name} className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
              <span className="font-medium">{bank.name}</span>
              <StoreLinks links={bank.links} label={bank.name} />
            </div>
          ))}
        </FadeIn>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
        <div className="rounded-[2rem] border border-line bg-paper-2 p-5 md:p-10">
          <Diagram />
        </div>
      </div>
    </article>
  );
}
