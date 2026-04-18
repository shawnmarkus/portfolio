import React from "react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import type { BlogPost } from "../types";

function ExternalIcon(): React.JSX.Element {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

interface BlogCardProps extends BlogPost {
  delay: string;
}

function BlogCard({
  tag,
  title,
  excerpt,
  date,
  link,
  delay,
}: BlogCardProps): React.JSX.Element {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "visible" : ""} group`}
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col gap-3 p-6 h-full border border-border bg-surface rounded-lg transition-all duration-300 group-hover:border-teal group-hover:-translate-y-1">
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-teal">
          {tag}
        </span>
        <p className="font-bold text-base leading-snug">{title}</p>
        <p className="text-sm leading-relaxed text-text-dim flex-1">
          {excerpt}
        </p>
        <div className="font-mono text-[0.68rem] text-muted flex justify-between items-center">
          <span>{date}</span>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-teal flex items-center gap-1 hover:opacity-80"
            >
              Read <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

interface BlogsProps {
  blogs: BlogPost[];
}

export default function Blogs({ blogs }: BlogsProps): React.JSX.Element {
  const [ref, visible] = useInView();
  return (
    <section id="blogs" className="relative z-10 py-24 px-6 md:px-16">
      <div ref={ref} className={`fade-up ${visible ? "visible" : ""}`}>
        <SectionHeader num="04" title="Writing &" accent="Blogs" />
      </div>

      {blogs.length === 0 ? (
        <div className="border border-dashed border-border rounded-lg p-16 text-center">
          <p className="font-mono text-sm text-muted leading-loose">
            No posts yet — but they're coming.
            <br />
            Add entries to your{" "}
            <span className="text-amber">portfolio.json</span> blogs array to
            publish here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {blogs.map((b, i) => (
            <BlogCard key={b.title} {...b} delay={`${i * 0.07}s`} />
          ))}
        </div>
      )}
    </section>
  );
}
