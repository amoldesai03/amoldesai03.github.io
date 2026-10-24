"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { metrics } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { useYears } from "./Years";

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    if (!inView) {
      el.textContent = (0).toFixed(decimals);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = v.toFixed(decimals);
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toFixed(decimals)}
    </span>
  );
}

export function Metrics({ buildYears }: { buildYears: number }) {
  const years = useYears(buildYears);
  return (
    <section aria-label="Highlights" className="shell py-20 md:py-28">
      <ul className="grid grid-cols-2 border-l border-t border-line lg:grid-cols-5">
        {metrics.map((m, i) => (
          <li key={m.label} className={`border-b border-r border-line ${i === metrics.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}>
            <FadeIn delay={i * 0.08} className="flex h-full flex-col justify-between gap-10 p-5 md:p-7">
              <span className="label text-muted">0{i + 1}</span>
              <div>
                <p className="display text-[clamp(2.4rem,4.2vw,4rem)] font-semibold leading-none tracking-[-0.04em]">
                  <Counter value={"years" in m ? years : m.value} decimals={m.decimals} />
                  <span className="text-accent">{m.suffix}</span>
                </p>
                <p className="mt-3 max-w-[16ch] text-sm text-muted">{m.label}</p>
              </div>
            </FadeIn>
          </li>
        ))}
      </ul>
    </section>
  );
}
