import type { ReactNode } from "react";
import { cvProjects, cvSkillsOnePage, education, experience, profile, skills, yearsOfExperience, type CvProject } from "@/content/site";
import { CvSummary } from "./CvSummary";
import { Rich } from "./Rich";

type Variant = "one-page" | "detailed";

const host = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Project({ project }: { project: CvProject }) {
  return (
    <div className="cv-entry">
      <div className="cv-row">
        <span>
          {project.link ? (
            <a href={project.link.href}>
              <strong>{project.name}</strong>
            </a>
          ) : (
            <strong>{project.name}</strong>
          )}{" "}
          | <em>{project.tech}</em>
        </span>
        {project.meta ? <span>{project.meta}</span> : null}
      </div>
      <ul className="cv-bullets">
        <li>
          <Rich text={project.line} />
        </li>
      </ul>
    </div>
  );
}

export function CvDocument({ variant }: { variant: Variant }) {
  const detailed = variant === "detailed";
  const projects = detailed ? cvProjects.detailed : cvProjects.onePage;
  const contacts = [
    { label: profile.phone, href: profile.phoneHref },
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: host(profile.linkedin), href: profile.linkedin },
    { label: host(profile.github), href: profile.github },
  ];

  return (
    <article className="cv-sheet">
      <header className="cv-header">
        <h1>{profile.name}</h1>
        <p>
          Android & Kotlin Multiplatform Developer | {profile.location} | <a href={profile.url}>{host(profile.url)}</a>
        </p>
        <p className="cv-contacts">
          {contacts.map((c, i) => (
            <span key={c.href}>
              {i > 0 ? <span className="cv-sep">|</span> : null}
              <a href={c.href}>{c.label}</a>
            </span>
          ))}
        </p>
      </header>

      <Section title="Summary">
        <p>
          <CvSummary buildYears={yearsOfExperience()} />
        </p>
      </Section>

      <Section title="Technical Skills">
        <div className="cv-skills">
          {skills.map((group) => (
            <p key={group.group}>
              <strong>{group.group}:</strong> {(detailed ? group.items : group.items.slice(0, cvSkillsOnePage)).join(", ")}
            </p>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        {experience.map((job) => (
          <div key={job.company} className="cv-entry">
            <div className="cv-row">
              <strong>{job.company}</strong>
              <span>{job.period.replace("now", "Present")}</span>
            </div>
            <div className="cv-row cv-sub">
              <em>{job.role}</em>
              <em>{job.location}</em>
            </div>
            <ul className="cv-bullets">
              {(detailed ? job.highlights : job.highlights.slice(0, job.onePage)).map((line) => (
                <li key={line}>
                  <Rich text={line} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section title={detailed ? "Projects" : "Selected Projects"}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Section>

      <Section title="Education">
        <div className="cv-entry">
          <div className="cv-row">
            <strong>{education.school}</strong>
            <span>{education.period}</span>
          </div>
          <div className="cv-row cv-sub">
            <em>{education.degree}</em>
            <em>{education.location}</em>
          </div>
        </div>
      </Section>
    </article>
  );
}
