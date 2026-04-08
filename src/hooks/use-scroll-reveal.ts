import { useEffect, useRef } from "react";

/**
 * Observes a ref and toggles the `.is-visible` class on the element when it
 * enters the viewport. Pair with the `.reveal` utility from index.css for
 * a clean fade-up entrance. Respects prefers-reduced-motion via the CSS.
 */
export function useScrollReveal<T extends HTMLElement>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the browser doesn't support IntersectionObserver, just show it.
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return ref;
}
