import React from "react";
import { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import type { Contact as ContactType } from "../types";

const icons: Record<string, ReactNode> = {
  email: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  phone: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

interface ContactLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

function ContactLink({
  href,
  icon,
  label,
}: ContactLinkProps): React.JSX.Element {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-2.5 px-5 py-3 border border-border rounded text-text-dim font-mono text-sm hover:border-amber hover:text-amber hover:bg-amber/5 transition-all"
    >
      {icon} {label}
    </a>
  );
}

interface ContactProps {
  contact: ContactType;
  tagline: string;
}

export default function Contact({
  contact,
  tagline,
}: ContactProps): React.JSX.Element {
  const [ref, visible] = useInView();

  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-6 md:px-16 bg-surface text-center"
    >
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className="font-mono text-xs text-amber opacity-50">05</span>
        <h2 className="font-sans font-extrabold tracking-tight text-[clamp(1.8rem,3.5vw,2.6rem)]">
          Let's <em className="font-serif text-amber not-italic">Connect</em>
        </h2>
      </div>

      <div
        ref={ref}
        className={`fade-up ${visible ? "visible" : ""} max-w-lg mx-auto flex flex-col items-center gap-8`}
      >
        <p className="font-serif italic text-text-dim text-2xl md:text-3xl leading-snug">
          "{tagline}"
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {contact.email && (
            <ContactLink
              href={`mailto:${contact.email}`}
              icon={icons.email}
              label={contact.email}
            />
          )}
          {contact.phone && (
            <ContactLink
              href={`tel:${contact.phone}`}
              icon={icons.phone}
              label={contact.phone}
            />
          )}
          {contact.github && (
            <ContactLink
              href={contact.github}
              icon={icons.github}
              label="GitHub"
            />
          )}
          {contact.linkedin && (
            <ContactLink
              href={contact.linkedin}
              icon={icons.linkedin}
              label="LinkedIn"
            />
          )}
        </div>
      </div>
    </section>
  );
}
