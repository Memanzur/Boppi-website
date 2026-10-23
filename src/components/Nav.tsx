import { ArrowUpRight, Github } from "lucide-react";
import { BETA_DEMO, LINKS } from "@/lib/links";

const items = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Vision & status", href: "#platform" },
  { label: "Access", href: "#pricing" },
];

const Nav = () => (
  <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
      <a href="/" className="flex items-center gap-2">
        <img src="/boppi-logo.png" alt="" className="w-7 h-7" />
        <span className="text-lg font-bold gradient-text">boppi</span>
      </a>
      <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
        {items.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-foreground transition-colors">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <a
          href={BETA_DEMO.live ? BETA_DEMO.path : BETA_DEMO.preview}
          className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {BETA_DEMO.live ? "Try the demo" : "Demo · soon"}
        </a>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border text-sm font-medium hover:border-primary/60 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a
          href={LINKS.app}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          Sign in <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </header>
);

export default Nav;
