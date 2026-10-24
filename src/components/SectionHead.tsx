import type { ReactNode } from "react";
import { SplitReveal } from "./SplitReveal";

type Props = {
  index: string;
  title: string;
  note?: ReactNode;
  tone?: "default" | "inverse";
};

export function SectionHead({ index, title, note, tone = "default" }: Props) {
  const line = tone === "inverse" ? "border-white/20" : "border-line";
  const muted = tone === "inverse" ? "text-white/60" : "text-muted";
  return (
    <div className={`flex flex-col gap-6 border-b pb-6 md:flex-row md:items-end md:justify-between ${line}`}>
      <div className="flex items-start gap-4 md:gap-6">
        <span className={`label mt-3 ${muted}`}>{index}</span>
        <SplitReveal
          as="h2"
          text={title}
          className="display text-[clamp(2.6rem,6.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
        />
      </div>
      {note ? <p className={`max-w-xs text-sm md:text-right ${muted}`}>{note}</p> : null}
    </div>
  );
}
