import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    title: "Discover",
    description: "Read MCP configuration for Claude Desktop, Claude Code, and Cursor. Unknown reach stays unknown.",
  },
  {
    title: "Read the graph and paths",
    description: "The scan connects agents, servers, and permissions, then reports the attack paths that combination can support.",
  },
  {
    title: "Review the recommendation",
    description: "Boppi names the permission change that removes the most modeled risk. The recommendation does not edit a file.",
  },
  {
    title: "Fix and verify",
    description: "A supported local change is applied after you confirm. The next scan checks whether the predicted paths are gone.",
  },
  {
    title: "Roll back or share",
    description: "Local rollback is in the latest scanner. Push sends one sanitized inventory to the workspace when you want the team to see it.",
  },
];

const HowItWorks = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="how-it-works" className="py-16 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-14 max-w-2xl">
          <p className="section-kicker">How it works</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] [text-wrap:balance]">From discovery to a verified change.</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            This is the loop that is available now. Full JIT, enterprise-wide changes, and runtime blocking are on the roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="font-mono text-sm text-primary leading-none mb-5 select-none">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold mb-2 leading-snug">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
