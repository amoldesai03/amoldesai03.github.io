import { skills } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { SectionHead } from "./SectionHead";

export function Skills() {
  return (
    <section id="skills" className="shell scroll-mt-16 pb-24 md:pb-36">
      <SectionHead index="03" title="Skills" note="What I reach for when an app has to be fast, stable and secure." />
      <div className="grid border-l border-line sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <FadeIn key={group.group} delay={(i % 3) * 0.08} className="border-b border-r border-line p-6 md:p-8">
            <div className="flex items-baseline justify-between">
              <h3 className="display text-2xl font-semibold tracking-[-0.02em]">{group.group}</h3>
              <span className="label text-muted">{String(group.items.length).padStart(2, "0")}</span>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-muted transition-colors hover:text-accent">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
