import { Github } from "lucide-react";
import { LINKS } from "@/lib/links";

const items = [
  { label: "How it works", href: "#how-it-works" },
  { label: "For teams", href: "#platform" },
  { label: "Pricing", href: "#pricing" },
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
      <a
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/60 bg-card/60 text-sm font-medium hover:border-primary/50 transition-colors"
      >
        <Github className="w-4 h-4" />
        GitHub
      </a>
    </div>
  </header>
);

export default Nav;
