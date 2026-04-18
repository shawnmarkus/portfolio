import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";

function ExpItem({ company, role, period, bullets, delay }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "visible" : ""}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col md:grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-10 border-b border-border last:border-0">
        {/* meta */}
        <div className="md:sticky md:top-20 md:self-start">
          <p className="font-mono text-xs text-amber">{period}</p>
          <p className="font-bold text-base mt-1.5 mb-1">{company}</p>
          <p className="font-mono text-xs text-muted">{role}</p>
        </div>
        {/* bullets */}
        <ul className="flex flex-col gap-3">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="text-sm leading-relaxed text-text-dim pl-5 relative"
            >
              <span className="absolute left-0 top-0.5 text-amber text-xs">
                ▹
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience({ experience }) {
  const [ref, visible] = useInView();
  return (
    <section
      id="experience"
      className="relative z-10 py-24 px-6 md:px-16 bg-surface"
    >
      <div ref={ref} className={`fade-up ${visible ? "visible" : ""}`}>
        <SectionHeader num="03" title="Work" accent="Experience" />
      </div>
      {experience.map((e, i) => (
        <ExpItem key={e.company} {...e} delay={`${i * 0.1}s`} />
      ))}
    </section>
  );
}
