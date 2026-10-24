"use client";

import Link from "next/link";
import { profile } from "@/content/site";

type Variant = "one-page" | "detailed";

const tabs: { variant: Variant; label: string; href: string }[] = [
  { variant: "one-page", label: "One page", href: profile.cv },
  { variant: "detailed", label: "Detailed", href: profile.cvDetailed },
];

export function CvToolbar({ variant }: { variant: Variant }) {
  const pdf = variant === "one-page" ? profile.cvPdf : profile.cvDetailedPdf;
  return (
    <div className="cv-toolbar sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-[8.5in] flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="label link-underline">
          {profile.name} / Portfolio
        </Link>
        <nav aria-label="CV version" className="flex rounded-full border border-line p-1">
          {tabs.map((tab) => (
            <Link
              key={tab.variant}
              href={tab.href}
              aria-current={tab.variant === variant ? "page" : undefined}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${tab.variant === variant ? "bg-ink text-paper" : "text-muted hover:text-ink"}`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <a
            href={pdf}
            download
            className="rounded-full bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-accent hover:text-on-accent"
          >
            Download PDF
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full border border-ink px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-paper"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
