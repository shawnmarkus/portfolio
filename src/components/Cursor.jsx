import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      dot.current.style.left = e.clientX + "px";
      dot.current.style.top = e.clientY + "px";
      ring.current.style.left = e.clientX + "px";
      ring.current.style.top = e.clientY + "px";
    };
    const expand = () =>
      (ring.current.style.transform = "translate(-50%,-50%) scale(1.7)");
    const shrink = () =>
      (ring.current.style.transform = "translate(-50%,-50%) scale(1)");

    window.addEventListener("mousemove", move);
    document.querySelectorAll('a,button,[role="button"]').forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-amber rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 w-7 h-7 border border-amber rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 opacity-50 transition-transform duration-100 hidden md:block"
      />
    </>
  );
}
