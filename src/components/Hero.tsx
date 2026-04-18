import React from "react";
import { useEffect, useRef } from "react";
import type { PortfolioData } from "../types";

interface AvatarProps {
  src: string;
  initials: string;
}

function Avatar({ src, initials }: AvatarProps): React.JSX.Element {
  return (
    <div className="relative w-52 h-52 md:w-72 md:h-72 mx-auto">
      <div className="absolute -inset-3 border border-dashed border-amber-dim rounded-full animate-spin-slow" />
      <div className="absolute -inset-6 border border-border rounded-full animate-spin-rev" />
      <div className="w-full h-full rounded-full bg-surface border-2 border-border flex items-center justify-center overflow-hidden">
        {src ? (
          <img
            src={src}
            alt="Profile avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-sans font-extrabold text-5xl md:text-7xl text-amber opacity-40">
            {initials}
          </span>
        )}
      </div>
    </div>
  );
}

interface HeroProps {
  data: PortfolioData;
  resumeUrl: string;
}

export default function Hero({
  data,
  resumeUrl,
}: HeroProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => ref.current?.classList.add("visible"), 100);
    return () => clearTimeout(timer);
  }, []);

  const { name, initials, role, title, bio, avatar } = data.meta;
  const [first, ...rest] = name.split(" ");
  const avatarInitials =
    initials ||
    name
      .split(" ")
      .map((n) => n[0])
      .join("");

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen px-6 md:px-16 pt-24 pb-16 flex items-center"
    >
      {/* Mobile: stack with avatar on top (flex-col-reverse). Desktop: two-column grid. */}
      <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text */}
        <div
          ref={ref}
          className="fade-up flex flex-col gap-5 text-center md:text-left items-center md:items-start"
        >
          <p className="font-mono text-xs text-amber uppercase tracking-[0.2em] flex items-center gap-3">
            <span className="hidden md:inline-block w-8 h-px bg-amber" />
            {role}
          </p>

          <h1 className="font-sans font-extrabold leading-[0.9] tracking-tight text-[clamp(3rem,7vw,5.5rem)]">
            {first}
            <br />
            <span className="text-amber">{rest.join(" ")}.</span>
          </h1>

          <p className="font-serif italic text-text-dim text-xl md:text-2xl">
            {title}
          </p>

          <p className="text-text-dim text-base leading-relaxed max-w-md">
            {bio}
          </p>

          {/* Tech chips */}
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
              className="font-mono text-sm px-6 py-3 bg-amber text-bg rounded font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all"
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

        {/* Avatar — first visually on mobile (flex-col-reverse makes it appear at top) */}
        <div className="flex justify-center">
          <Avatar src={avatar} initials={avatarInitials} />
        </div>
      </div>
    </section>
  );
}
