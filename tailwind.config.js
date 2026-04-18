/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080810",
        surface: "#0f0f1c",
        border: "#1e1e35",
        amber: "#f5a623",
        "amber-dim": "#9b6610",
        teal: "#2dd4bf",
        muted: "#6b6b8a",
        text: "#e4e4f0",
        "text-dim": "#9898b8",
      },
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
        serif: ['"Instrument Serif"', "serif"],
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "spin-rev": "spin 28s linear infinite reverse",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
