import React from "react";
import "./index.css";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import { usePortfolioData } from "./hooks/usePortfolioData";

interface FooterProps {
  name: string;
}

function Footer({ name }: FooterProps): React.JSX.Element {
  return (
    <footer className="relative z-10 px-6 md:px-16 py-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-muted">
      <span>© 2026 {name}</span>
      <span>
        Built with React + TypeScript + Tailwind · Data-driven via JSON
      </span>
    </footer>
  );
}

export default function App(): React.JSX.Element {
  const { data, loading } = usePortfolioData();

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center gap-4">
        <span className="font-mono text-sm text-amber tracking-widest">
          // LOADING
        </span>
        <div className="w-40 h-0.5 bg-border rounded overflow-hidden">
          <div className="w-1/2 h-full bg-amber animate-pulse" />
        </div>
      </div>
    );
  }

  const { meta, skills, projects, experience, blogs, contact } = data;
  alert(meta.resume_url);
  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      <Cursor />
      <Navbar resumeUrl={meta.resume_url} />
      <main>
        <Hero data={data} resumeUrl={meta.resume_url} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Blogs blogs={blogs} />
        <Contact contact={contact} tagline={meta.contact_tagline} />
      </main>
      <Footer name={meta.name} />
    </div>
  );
}
