import { useEffect, useRef } from "react";

function Avatar({ src, initials }) {
  return (
    <div className="relative w-52 h-52 md:w-72 md:h-72 mx-auto">
      {/* spinning rings */}
      <div className="absolute -inset-3 border border-dashed border-amber-dim rounded-full animate-spin-slow" />
      <div className="absolute -inset-6 border border-border rounded-full animate-spin-rev" />
      {/* circle */}
      <div className="w-full h-full rounded-full bg-surface border-2 border-border flex items-center justify-center overflow-hidden">
        {src ? (
          <img src={src} alt="avatar" className="w-full h-full object-cover" />
        ) : (
          <span className="font-sans font-extrabold text-5xl md:text-7xl text-amber opacity-40">
            {initials}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Hero({ data, resumeUrl }) {
  const ref = useRef(null);
  useEffect(() => {
    setTimeout(() => ref.current?.classList.add("visible"), 100);
  }, []);

  const { name, initials, role, title, bio, avatar } = data.meta;
  const [first, ...rest] = name.split(" ");

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen px-6 md:px-16 pt-24 pb-16 flex items-center"
    >
      {/* Mobile: stack vertically, avatar first. Desktop: two-column grid */}
      <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT — text */}
        <div
          ref={ref}
          className="fade-up flex flex-col gap-5 text-center md:text-left items-center md:items-start"
        >
          {/* eyebrow */}
          <p className="font-mono text-xs text-amber uppercase tracking-[0.2em] flex items-center gap-3">
            <span className="hidden md:inline-block w-8 h-px bg-amber" />
            {role}
          </p>

          {/* name */}
          <h1 className="font-sans font-extrabold leading-[0.9] tracking-tight text-[clamp(3rem,7vw,5.5rem)]">
            {first}
            <br />
            <span className="text-amber">{rest.join(" ")}.</span>
          </h1>

          {/* subtitle */}
          <p className="font-serif italic text-text-dim text-xl md:text-2xl">
            {title}
          </p>

          {/* bio */}
          <p className="text-text-dim text-base leading-relaxed max-w-md">
            {bio}
          </p>

          {/* tech chips */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {data.tech_highlights.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1 bg-surface border border-amber-dim text-amber rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap justify-center md:justify-start mt-2">
            <a
              href="#contact"
              className="font-mono text-sm px-6 py-3 bg-amber text-bg rounded font-medium hover:opacity-90 hover:-translate-y-0.5 transition-transform"
            >
              Get in touch →
            </a>
            <a
              href={resumeUrl || "#"}
              download={resumeUrl || undefined}
              className="font-mono text-sm px-6 py-3 border border-border text-text-dim rounded hover:border-teal hover:text-teal transition-colors"
            >
              ↓ Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT — avatar (shown FIRST on mobile via flex-col-reverse) */}
        <div className="flex justify-center">
          <Avatar
            src={avatar}
            initials={
              initials ||
              name
                .split(" ")
                .map((n) => n[0])
                .join("")
            }
          />
        </div>
      </div>
    </section>
  );
}
