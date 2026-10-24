"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { festiv } from "@/content/site";
import { PhoneFrame } from "./PhoneFrame";

const fan = [
  { rotate: -9, x: "-58%", y: 40 },
  { rotate: 0, x: "0%", y: 0 },
  { rotate: 9, x: "58%", y: 40 },
];

function Fan({ progress }: { progress: MotionValue<number> }) {
  const shots = festiv.shots.slice(0, 3);
  return (
    <div className="relative mx-auto flex h-full w-full max-w-xl items-center justify-center py-10">
      {shots.map((shot, i) => {
        const f = fan[i] ?? fan[1];
        return (
          <FanPhone key={shot.src} shot={shot} spread={progress} target={f} front={i === 1} />
        );
      })}
    </div>
  );
}

function FanPhone({
  shot,
  spread,
  target,
  front,
}: {
  shot: (typeof festiv.shots)[number];
  spread: MotionValue<number>;
  target: (typeof fan)[number];
  front: boolean;
}) {
  const rotate = useTransform(spread, [0, 1], [0, target.rotate]);
  const x = useTransform(spread, [0, 1], ["0%", target.x]);
  const y = useTransform(spread, [0, 1], [0, target.y]);
  return (
    <motion.div style={{ rotate, x, y }} className={`${front ? "relative z-10" : "absolute"} w-[clamp(150px,22vw,250px)]`}>
      <PhoneFrame src={shot.src} alt={`Festiv ${shot.caption} screen`} width={shot.width} height={shot.height} />
    </motion.div>
  );
}

function Emblem({ progress }: { progress: MotionValue<number> }) {
  const rotate = useTransform(progress, [0, 1], [-20, 20]);
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center">
      {[1, 0.78, 0.56].map((s, i) => (
        <span
          key={s}
          aria-hidden
          className="absolute rounded-full border border-dashed border-festiv-gold/40"
          style={{ inset: `${(1 - s) * 50}%`, animation: `spin-slow ${40 + i * 15}s linear infinite ${i % 2 ? "reverse" : ""}` }}
        />
      ))}
      <motion.div style={{ rotate }} className="relative w-[46%] overflow-hidden rounded-[22%] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.5)]">
        <Image src={festiv.icon} alt="Festiv app icon" width={256} height={256} className="h-auto w-full" />
      </motion.div>
    </div>
  );
}

export function FestivShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const hasShots = festiv.shots.length >= 3;

  return (
    <section ref={ref} aria-labelledby="festiv-title" className="relative overflow-hidden bg-festiv text-[#fbf3e6]">
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="label flex flex-wrap items-center gap-3 text-[#fbf3e6]/65">
            <span>{festiv.eyebrow}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-festiv-gold/40 px-3 py-1 text-festiv-gold">
              <span className="size-1.5 rounded-full bg-festiv-gold [animation:pulse-dot_2s_ease-in-out_infinite]" />
              {festiv.status}
            </span>
          </div>
          <h3 id="festiv-title" className="display mt-6 text-[clamp(3rem,6.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            {festiv.title}
          </h3>
          <p className="mt-4 max-w-md text-xl text-[#fbf3e6]/75">{festiv.subtitle}</p>
          <p className="mt-6 max-w-lg leading-relaxed">{festiv.summary}</p>
          <ul className="mt-6 max-w-lg space-y-2.5 border-t border-[#fbf3e6]/20 pt-5 text-[0.95rem] text-[#fbf3e6]/90">
            {festiv.points.map((p) => (
              <li key={p} className="grid grid-cols-[1.5rem_1fr]">
                <span className="label pt-1 text-festiv-gold">+</span>
                {p}
              </li>
            ))}
          </ul>
          <p className="label mt-8 text-[#fbf3e6]/55">Android and iOS builds in internal testing</p>
        </div>
        <div className="min-h-[420px] lg:col-span-6 lg:col-start-7">
          {hasShots ? <Fan progress={scrollYProgress} /> : <Emblem progress={scrollYProgress} />}
        </div>
      </div>
    </section>
  );
}
