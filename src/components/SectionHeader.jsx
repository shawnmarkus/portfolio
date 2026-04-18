export default function SectionHeader({ num, title, accent }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-xs text-amber opacity-50">{num}</span>
      <h2 className="font-sans font-extrabold tracking-tight text-[clamp(1.8rem,3.5vw,2.6rem)] whitespace-nowrap">
        {title} <em className="font-serif text-amber not-italic">{accent}</em>
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
