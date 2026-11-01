import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { signupUrl } from "@/lib/app-url";

/**
 * Persistent corner chip. It used to imitate a browser-extension badge.
 * It now points at Boppi Cloud signup and does not claim the page is being watched.
 */
const STORAGE_KEY = "boppi-floating-badge-dismissed";

const FloatingBadge = () => {
  const [dismissed, setDismissed] = useState(false);
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setDismissed(true);
      }
    } catch {
      // sessionStorage may be unavailable in some embedded contexts. Ignore.
    }
  }, []);

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

  if (dismissed || !pastHero) return null;

  return (
    <div
      ref={rootRef}
      className="fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6"
      aria-live="polite"
    >
      {open && (
        <div
          role="dialog"
          aria-label="Create a Boppi Cloud account"
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
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold mb-1">Boppi Cloud</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Create an account to review potential access for Claude Desktop,
                Claude Code, and Cursor on an enrolled computer.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={signupUrl()}
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Create a secure account
                </a>
                <span className="text-muted-foreground/60">·</span>
                <a
                  href="#how-it-works"
                  onClick={() => setOpen(false)}
                  className="text-xs font-semibold text-secondary hover:underline"
                >
                  How it works
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Boppi Cloud. Open to create an account."
        className="group flex items-center gap-2 pl-2 pr-3 py-2 rounded-full bg-card/90 backdrop-blur-md border border-primary/30 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
          <img src="/boppi-logo.png" alt="" className="w-5 h-5" />
        </div>
        <span className="text-xs font-semibold text-foreground hidden sm:inline">
          Boppi Cloud
        </span>
      </button>
    </div>
  );
};

export default FloatingBadge;
