import { useEffect, useRef } from "react";

/**
 * Soft-edged anime-ish 4-point sparkle stars that trail the mouse cursor.
 *
 * Stars are appended as raw DOM nodes (not React state) so we never trigger
 * a re-render on mousemove. Each node removes itself when its CSS animation
 * ends. Disabled on touch devices and when prefers-reduced-motion is set.
 */

const COLORS = [
  "hsl(310, 90%, 85%)", // primary / pink
  "hsl(190, 85%, 70%)", // secondary / cyan
  "hsl(170, 100%, 75%)", // accent / mint
];

// Inline 4-point sparkle, fill="currentColor" so we color per-star via CSS var.
const STAR_SVG = `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path d="M12 1.5 C12.6 6.6 17.4 11.4 22.5 12 C17.4 12.6 12.6 17.4 12 22.5 C11.4 17.4 6.6 12.6 1.5 12 C6.6 11.4 11.4 6.6 12 1.5 Z"/>
</svg>`;

const SPAWN_INTERVAL_MS = 55;
const MIN_MOVE_PX = 6;

const CursorStars = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const lastSpawnRef = useRef(0);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Touch devices and reduced-motion users skip entirely.
    const noHover = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (noHover || reduced) return;

    const root = rootRef.current;
    if (!root) return;

    const spawn = (x: number, y: number) => {
      const star = document.createElement("div");
      star.className = "boppi-cursor-star";

      const size = 12 + Math.random() * 12; // 12 to 24 px
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const rot = Math.random() * 360;
      const driftX = (Math.random() - 0.5) * 40;
      const driftY = -20 - Math.random() * 30;

      star.style.setProperty("--size", `${size}px`);
      star.style.setProperty("--color", color);
      star.style.setProperty("--rot", `${rot}deg`);
      star.style.setProperty("--drift-x", `${driftX}px`);
      star.style.setProperty("--drift-y", `${driftY}px`);
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.innerHTML = STAR_SVG;

      root.appendChild(star);
      star.addEventListener("animationend", () => star.remove(), { once: true });
    };

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const last = lastPosRef.current;

      // Only spawn if the cursor has actually moved a bit.
      if (last) {
        const dx = e.clientX - last.x;
        const dy = e.clientY - last.y;
        if (dx * dx + dy * dy < MIN_MOVE_PX * MIN_MOVE_PX) return;
      }

      // Rate-limit spawns so we don't flood the DOM.
      if (now - lastSpawnRef.current < SPAWN_INTERVAL_MS) return;

      lastSpawnRef.current = now;
      lastPosRef.current = { x: e.clientX, y: e.clientY };
      spawn(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 70 }}
      aria-hidden="true"
    />
  );
};

export default CursorStars;
