import { Eye, GitBranch, Route, Wrench, Shield, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pillars = [
  {
    name: "Discover",
    body: "Identify AI agents, MCP servers, integrations, and what they can access.",
    icon: Eye,
    tone: "bg-primary/15 text-primary border-primary/30",
  },
  {
    name: "Graph",
    body: "Map agents, identities, permissions, and the resources those permissions reach.",
    icon: GitBranch,
    tone: "bg-secondary/15 text-secondary border-secondary/30",
  },
  {
    name: "Paths",
    body: "Detect dangerous combinations and the attack paths they create.",
    icon: Route,
    tone: "bg-accent/15 text-accent border-accent/30",
  },
  {
    name: "Fix",
    body: "Recommend a permission change, apply a supported local fix, verify it, and roll it back.",
    icon: Wrench,
    tone: "bg-primary/15 text-primary border-primary/30",
  },
  {
    name: "Guard",
    body: "Govern access with policy and monitoring. Full JIT and runtime blocking are on the roadmap.",
    icon: Shield,
    tone: "bg-secondary/15 text-secondary border-secondary/30",
  },
  {
    name: "Learn",
    body: "Improve detection from verified evidence. Early intelligence components are in beta.",
    icon: Sparkles,
    tone: "bg-accent/15 text-accent border-accent/30",
  },
];

const Products = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="products" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-10 space-y-3">
          <p className="section-kicker">Six pillars</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">One control plane.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The pillars are the product. Each capability under them is marked Available now, In beta, or On the roadmap.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="rounded-2xl border border-border bg-card/60 p-5">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${item.tone}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg mt-4">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
