import { useEffect, useRef, useState } from "react";
import { X, Shield } from "lucide-react";

/**
 * A small persistent badge in the bottom-right corner that mimics what the
 * real Boppi extension shows while it's running. This is a meta-demo: the
 * site itself "wears" Boppi so visitors get a feel for the experience before
 * they install.
 *
 * Behavior:
 *  - Fixed bottom-right on desktop and mobile.
 *  - Dot pulses softly with a success color to indicate "watching".
 *  - Click/tap opens a small popover with a CTA and a dismiss button.
 *  - Remembers dismissal for the session so it doesn't nag on reload.
 */
const STORAGE_KEY = "boppi-floating-badge-dismissed";

const FloatingBadge = () => {
  const [dismissed, setDismissed] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Read session dismissal on mount.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setDismissed(true);
      }
    } catch {
      // sessionStorage may be unavailable in some embedded contexts. Ignore.
    }
  }, []);

  // Close the popover when clicking outside of it.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const dismiss = () => {
    setDismissed(true);
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore.
    }
  };

  if (dismissed) return null;

  return (
    <div
      ref={rootRef}
      className="fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6"
      aria-live="polite"
    >
      {/* Popover */}
      {open && (
        <div
          role="dialog"
          aria-label="Boppi is watching"
          className="absolute bottom-full right-0 mb-3 w-72 rounded-2xl border border-primary/30 bg-card/95 backdrop-blur-md shadow-2xl p-4 animate-boppi-pop"
        >
          <button
            type="button"
            onClick={dismiss}
            className="absolute top-2 right-2 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-3 pr-6">
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <img src="/boppi-logo.png" alt="" className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-success border-2 border-card animate-boppi-pulse" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold mb-1">You're looking at the demo</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This badge is a meta-preview of the real thing. The actual Boppi badge sits in
                the corner of every AI tool your team uses, quietly masking PII before it's sent.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <a
                  href="#demo"
                  onClick={() => setOpen(false)}
                  className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  Try the live demo
                </a>
                <span className="text-muted-foreground/60">·</span>
                <button
                  type="button"
                  onClick={() => {
                    window.open('https://chromewebstore.google.com/detail/Boppi/pnfpbhjhmpfmkjdjpdbkapaibjmpmkld', '_blank');
                    setOpen(false);
                  }}
                  className="text-xs font-semibold text-secondary hover:underline"
                >
                  Add to Chrome
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* The badge itself */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Boppi is watching. Tap to learn more."
        className="group flex items-center gap-2 pl-2 pr-3 py-2 rounded-full bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
      >
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
            <img src="/boppi-logo.png" alt="" className="w-5 h-5" />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-success border-2 border-card animate-boppi-pulse" />
        </div>
        <span className="text-xs font-semibold text-foreground hidden sm:inline">
          Boppi watching
        </span>
        <Shield className="w-3.5 h-3.5 text-success sm:hidden" />
      </button>
    </div>
  );
};

export default FloatingBadge;
