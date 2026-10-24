"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { archive } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { Plus } from "./icons";

export function Archive() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="py-16 md:py-24">
      <FadeIn className="mb-8 flex items-end justify-between gap-6">
        <h3 className="display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-none tracking-[-0.03em]">More from the CV</h3>
        <p className="label hidden text-muted md:block">Client and early work</p>
      </FadeIn>
      <ul className="border-b border-line">
        {archive.map((item, i) => {
          const isOpen = open === i;
          const panelId = `archive-panel-${i}`;
          return (
            <li key={item.title} className="border-t border-line">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group relative grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-4 overflow-hidden py-5 text-left md:grid-cols-[4rem_1fr_19rem_2rem] md:py-7"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100"
                />
                <span className="label relative text-muted transition-colors duration-300 group-hover:text-paper/60 md:pl-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display relative text-[clamp(1.35rem,3vw,2.4rem)] tracking-[-0.02em] font-semibold leading-tight transition-[color,translate] duration-300 group-hover:translate-x-2 group-hover:text-paper">
                  {item.title}
                </span>
                <span className="label relative hidden text-muted transition-colors duration-300 group-hover:text-paper/60 md:block">
                  {item.kind} / {item.org}
                </span>
                <Plus
                  className={`relative size-5 transition-[rotate,color] duration-300 group-hover:text-paper ${isOpen ? "rotate-45 text-accent" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-4 pb-8 md:grid-cols-[4rem_1fr_19rem_2rem]">
                      <p className="label text-muted md:col-start-3 md:row-start-1 md:hidden">
                        {item.kind} / {item.org}
                      </p>
                      <p className="max-w-2xl text-lg leading-relaxed md:col-start-2 md:row-start-1">{item.body}</p>
                      <ul className="flex flex-wrap content-start gap-2 md:col-start-3 md:row-start-1">
                        {item.tags.map((tag) => (
                          <li key={tag} className="label rounded-full border border-line px-3 py-1.5">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
