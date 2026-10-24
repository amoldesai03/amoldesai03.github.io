"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef } from "react";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export function Marquee({ items, speed = 3 }: { items: string[]; speed?: number }) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const skew = useTransform(velocity, [-2500, 2500], [10, -10]);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = direction.current * -speed * (delta / 1000);
    if (boost.get() < 0) direction.current = -1;
    else if (boost.get() > 0) direction.current = 1;
    move += direction.current * -speed * (delta / 1000) * Math.abs(boost.get());
    baseX.set(baseX.get() + move);
  });

  const row = (copy: number) =>
    items.map((item) => (
      <span key={`${copy}-${item}`} className="flex shrink-0 items-center gap-[0.4em] pr-[0.4em]">
        {item}
        <span aria-hidden className="ml-[0.25em] inline-block size-[0.2em] rounded-full bg-accent" />
      </span>
    ));

  return (
    <div className="overflow-hidden border-y border-line py-5" aria-label={items.join(", ")}>
      <motion.div
        aria-hidden
        style={{ x, skewX: skew }}
        className="display flex w-max whitespace-nowrap text-[clamp(2rem,5.5vw,4.5rem)] font-semibold leading-none tracking-[-0.03em]"
      >
        {row(0)}
        {row(1)}
      </motion.div>
    </div>
  );
}
