import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false);
  const x = useSpring(useMotionValue(-400), { stiffness: 140, damping: 22 });
  const y = useSpring(useMotionValue(-400), { stiffness: 140, damping: 22 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    // Pointer events can fire several times per frame; do the layout read + style write once per frame.
    let frame = 0;
    let last: PointerEvent | null = null;
    const update = () => {
      frame = 0;
      if (!last) return;
      x.set(last.clientX);
      y.set(last.clientY);
      const card = (last.target as Element | null)?.closest?.<HTMLElement>(".spotlight-card");
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${last.clientX - rect.left}px`);
        card.style.setProperty("--my", `${last.clientY - rect.top}px`);
      }
    };
    const onMove = (event: PointerEvent) => {
      last = event;
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      // `translate` (not transform) centres the glow, since framer-motion owns the transform for x/y.
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(110,90,255,0.13),transparent_62%)] [translate:-50%_-50%]"
    />
  );
};
