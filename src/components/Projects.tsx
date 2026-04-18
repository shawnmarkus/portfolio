import React from "react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import type { Project, Projects as ProjectsType } from "../types";

function ExternalIcon(): React.JSX.Element {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

interface ProjectCardProps extends Project {
  delay: string;
}

function ProjectCard({
  icon,
  name,
  desc,
  stack,
  date,
  link,
  company,
  delay,
}: ProjectCardProps): React.JSX.Element {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "visible" : ""} group`}
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col h-full border border-border bg-surface rounded-lg transition-all duration-300 group-hover:border-teal group-hover:-translate-y-1">
        <div className="p-6 flex-1">
          <div className="text-2xl mb-4">{icon}</div>
          <div className="font-bold text-base mb-2">
            {name}
            {company && (
              <span className="font-mono text-[0.65rem] text-muted font-normal ml-2">
                @ {company}
              </span>
            )}
          </div>
          <p className="text-sm leading-relaxed text-text-dim">{desc}</p>
        </div>
        <div className="px-6 py-4 border-t border-border flex items-center justify-between gap-2 flex-wrap">
          <div className="flex flex-wrap gap-1.5">
            {stack.map((t) => (
              <span
                key={t}
                className="font-mono text-[0.62rem] px-2 py-0.5 bg-bg rounded text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-teal flex items-center gap-1 hover:opacity-80"
            >
              View <ExternalIcon />
            </a>
          ) : (
            date && (
              <span className="font-mono text-[0.68rem] text-muted whitespace-nowrap">
                {date}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

type TabKey = "personal" | "professional";

interface ProjectsProps {
  projects: ProjectsType;
}

export default function Projects({
  projects,
}: ProjectsProps): React.JSX.Element {
  const [tab, setTab] = useState<TabKey>("professional");
  const [ref, visible] = useInView();

  const tabs: TabKey[] = ["professional", "personal"];

  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-16">
      <div ref={ref} className={`fade-up ${visible ? "visible" : ""}`}>
        <SectionHeader num="02" title="Selected" accent="Projects" />
      </div>

      <div className="flex border-b border-border mb-10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`font-mono text-xs tracking-widest px-6 py-3 border-b-2 -mb-px transition-colors capitalize
              ${tab === t ? "text-amber border-amber" : "text-muted border-transparent hover:text-text-dim"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects[tab].map((p, i) => (
          <ProjectCard key={p.name} {...p} delay={`${i * 0.07}s`} />
        ))}
      </div>
    </section>
  );
}
