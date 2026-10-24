import { education, experience, yearsOfExperience } from "@/content/site";
import { FadeIn } from "./FadeIn";
import { SectionHead } from "./SectionHead";
import { Years } from "./Years";

export function Experience() {
  return (
    <section id="experience" className="shell scroll-mt-16 py-24 md:py-36">
      <SectionHead
        index="02"
        title="Experience"
        note={
          <>
            <Years buildYears={yearsOfExperience()} /> years across banking, fintech, client services and data.
          </>
        }
      />
      <ol>
        {experience.map((job, i) => (
          <li key={job.company} className="border-b border-line">
            <FadeIn delay={i * 0.06} className="group grid gap-3 py-8 md:grid-cols-12 md:gap-6 md:py-10">
              <p className="label text-muted md:col-span-3 md:pt-3">{job.period}</p>
              <h3 className="display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] transition-[color,translate] duration-500 group-hover:translate-x-3 group-hover:text-accent md:col-span-5">
                {job.company}
              </h3>
              <div className="md:col-span-4 md:pt-2">
                <p className="font-medium">{job.role}</p>
                <p className="mt-2 text-muted">{job.body}</p>
              </div>
            </FadeIn>
          </li>
        ))}
        <li>
          <FadeIn className="grid gap-3 py-8 md:grid-cols-12 md:gap-6">
            <p className="label text-muted md:col-span-3">{education.period}</p>
            <p className="label md:col-span-5">Education</p>
            <div className="md:col-span-4">
              <p className="font-medium">{education.shortDegree}</p>
              <p className="mt-2 text-muted">
                {education.school}, {education.location}
              </p>
            </div>
          </FadeIn>
        </li>
      </ol>
    </section>
  );
}
