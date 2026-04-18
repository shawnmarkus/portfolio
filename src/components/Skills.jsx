import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";

function SkillCard({ label, tags, delay }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "visible" : ""} group`}
      style={{ animationDelay: delay }}
    >
      <div className="p-6 border border-border bg-bg rounded-lg transition-all duration-300 group-hover:border-amber group-hover:-translate-y-1">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-amber mb-4">
          {label}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[0.7rem] px-2 py-1 bg-surface rounded text-text-dim"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  const [ref, visible] = useInView();
  return (
    <section
      id="skills"
      className="relative z-10 py-24 px-6 md:px-16 bg-surface"
    >
      <div ref={ref} className={`fade-up ${visible ? "visible" : ""}`}>
        <SectionHeader num="01" title="Technical" accent="Skills" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <SkillCard key={s.label} {...s} delay={`${i * 0.07}s`} />
        ))}
      </div>
    </section>
  );
}
