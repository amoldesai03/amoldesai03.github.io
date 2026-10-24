"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { shipped, type ShippedApp } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { PhoneFrame } from "./PhoneFrame";
import { StoreLinks } from "./StoreLinks";

const ease = [0.22, 1, 0.36, 1] as const;

const fans: Record<number, { x: string; y: number; rotate: number }[]> = {
  2: [
    { x: "-36%", y: 14, rotate: -5 },
    { x: "36%", y: 14, rotate: 5 },
  ],
  3: [
    { x: "-64%", y: 30, rotate: -8 },
    { x: "0%", y: 0, rotate: 0 },
    { x: "64%", y: 30, rotate: 8 },
  ],
};

function Shot({ app, index, className = "" }: { app: ShippedApp; index: number; className?: string }) {
  const shot = app.shots[index];
  const alt = `${app.name} ${shot.caption} screen`;
  if (app.framed) return <PhoneFrame src={shot.src} alt={alt} width={shot.width} height={shot.height} className={className} />;
  return (
    <Image
      src={shot.src}
      alt={alt}
      width={shot.width}
      height={shot.height}
      sizes="260px"
      className={`block h-auto w-full rounded-[1.4rem] shadow-[0_30px_60px_-24px_rgb(0_0_0/0.55)] ${className}`}
    />
  );
}

function Stage({ app }: { app: ShippedApp }) {
  const shots = app.shots.slice(0, 3);
  const fan = fans[shots.length] ?? fans[3];
  const ink = app.onTint === "light" ? "#ffffff" : "#0f172a";
  return (
    <motion.div
      className="relative aspect-[5/4] overflow-hidden rounded-[2rem]"
      animate={{ backgroundColor: app.tint }}
      transition={{ duration: 0.6, ease }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.p
          key={`${app.id}-name`}
          aria-hidden
          className="display absolute -bottom-[0.2em] left-6 text-[8rem] font-bold leading-none tracking-[-0.05em]"
          style={{ color: ink }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.16, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease }}
        >
          {app.name}
        </motion.p>
      </AnimatePresence>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div key={app.id} className="absolute inset-0 flex items-center justify-center">
          {shots.map((shot, i) => (
            <motion.div
              key={shot.src}
              className={`absolute w-[30%] ${i === Math.floor(shots.length / 2) && shots.length === 3 ? "z-10" : ""}`}
              initial={{ opacity: 0, y: 120, x: "0%", rotate: 0 }}
              animate={{ opacity: 1, y: fan[i].y, x: fan[i].x, rotate: fan[i].rotate }}
              exit={{ opacity: 0, y: -60, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, ease, delay: 0.05 + i * 0.07 }}
            >
              <Shot app={app} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <span
        className="label absolute right-5 top-5 rounded-full px-3 py-1"
        style={{ color: ink, border: `1px solid ${ink}40` }}
      >
        {app.status}
      </span>
    </motion.div>
  );
}

function Details({ app }: { app: ShippedApp }) {
  return (
    <div>
      <p className="max-w-xl leading-relaxed">{app.summary}</p>
      <StoreLinks links={app.links} label={app.name} className="mt-5" />
    </div>
  );
}

export function AppIndex() {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const app = shipped[selected];

  return (
    <div className="border-b border-line py-16 md:py-24">
      <FadeIn className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h3 className="display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em]">On the Play Store</h3>
        <p className="max-w-sm text-muted">
          Client apps I built or rebuilt, from stock trading and state electricity bills to an MKBHD wallpaper app.
        </p>
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-12">
        <ol className="min-w-0 lg:col-span-5">
          {shipped.map((item, i) => {
            const isSelected = selected === i;
            const isOpen = open === i;
            const panelId = `shipped-panel-${item.id}`;
            return (
              <li key={item.id} className="border-t border-line last:border-b">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onMouseEnter={() => setSelected(i)}
                  onFocus={() => setSelected(i)}
                  onClick={() => {
                    setSelected(i);
                    setOpen(isOpen ? null : i);
                  }}
                  className="group relative flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    aria-hidden
                    className={`absolute -left-3 top-1/2 h-8 w-[3px] -translate-y-1/2 origin-center bg-accent transition-transform duration-500 ${isSelected ? "scale-y-100" : "scale-y-0"}`}
                  />
                  <Image src={item.icon} alt="" width={48} height={48} className="size-11 shrink-0 rounded-xl" />
                  <span className="min-w-0 flex-1">
                    <span
                      className={`display block tracking-[-0.02em] text-[clamp(1.7rem,3.4vw,2.8rem)] font-semibold leading-none transition-[color,translate] duration-500 ${isSelected ? "translate-x-1 text-ink" : "text-muted group-hover:text-ink"}`}
                    >
                      {item.name}
                    </span>
                    <span className="label mt-2 block truncate text-muted">
                      {item.client} / {item.platform}
                    </span>
                  </span>
                  {item.installs ? (
                    <span className="label shrink-0 text-right">
                      <span className="block text-base text-ink">{item.installs}</span>
                      <span className="text-muted">Downloads</span>
                    </span>
                  ) : (
                    <span className="label shrink-0 text-right text-muted">Open source</span>
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      className="overflow-hidden lg:hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                    >
                      <div className="pb-8">
                        <div
                          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-6 sm:-mx-8 sm:px-8"
                          style={{ backgroundColor: item.tint }}
                        >
                          {item.shots.map((shot, s) => (
                            <div key={shot.src} className="w-40 shrink-0 snap-center sm:w-48">
                              <Shot app={item} index={s} />
                            </div>
                          ))}
                        </div>
                        <p className="label mt-4 text-muted">{item.status}</p>
                        <div className="mt-3">
                          <Details app={item} />
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>

        <div className="hidden lg:col-span-7 lg:block">
          <div className="sticky top-24">
            <Stage app={app} />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={app.id}
                className="mt-6"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Details app={app} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
