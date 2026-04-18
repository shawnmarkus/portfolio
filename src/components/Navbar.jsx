import { useState, useEffect } from "react";

const NAV_LINKS = ["Skills", "Projects", "Experience", "Blogs", "Contact"];

export default function Navbar({ resumeUrl }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-16 transition-all duration-300
        ${scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"}`}
      >
        {/* Logo */}
        <span className="font-mono text-sm text-amber tracking-widest">
          // shivam.sh
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="font-mono text-xs text-muted uppercase tracking-widest hover:text-amber transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href={resumeUrl || "#"}
            download={resumeUrl || undefined}
            className="hidden md:block font-mono text-xs text-amber border border-amber px-4 py-2 rounded hover:bg-amber hover:text-bg transition-all"
          >
            ↓ Resume
          </a>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50"
          >
            <span
              className={`block h-px w-6 bg-text transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-text transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-text transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {NAV_LINKS.map((l, i) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={handleLinkClick}
            className="font-sans font-bold text-xl text-text-dim hover:text-amber transition-colors"
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
          >
            {l}
          </a>
        ))}
        <div className="w-12 h-px bg-border mt-4" />
        <a
          href={resumeUrl || "#"}
          download={resumeUrl || undefined}
          onClick={handleLinkClick}
          className="font-mono text-sm text-amber border border-amber px-6 py-3 rounded hover:bg-amber hover:text-bg transition-all"
        >
          ↓ Download Resume
        </a>
      </div>
    </>
  );
}
