import type { StoreLink } from "@/content/site";
import { ArrowUpRight } from "./icons";

export function StoreLinks({ links, label, className = "" }: { links: StoreLink[]; label?: string; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label ? `${label} on ${link.label}` : link.label}
            className="group inline-flex items-center gap-2 rounded-full border border-current px-4 py-2 text-sm transition-colors hover:bg-[var(--chip-hover,var(--ink))] hover:text-[var(--chip-hover-text,var(--paper))]"
          >
            {link.label}
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
