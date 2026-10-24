"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { LocalTime } from "./LocalTime";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: "/cv/", label: "CV" },
];

export function Header() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[var(--header-h)] border-b border-line bg-paper/85 text-ink backdrop-blur-md">
      <div className="shell flex h-full items-center justify-between gap-6">
        <a href="#top" className="display text-lg font-semibold tracking-[-0.02em]" aria-label="Amol Desai, back to top">
          Amol Desai
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="label link-underline pb-0.5 text-muted transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <LocalTime className="label hidden text-muted sm:inline" />
          <ThemeToggle />
        </div>
      </div>
      <motion.div aria-hidden className="absolute inset-x-0 -bottom-px h-[2px] origin-left bg-accent" style={{ scaleX: progress }} />
    </header>
  );
}
