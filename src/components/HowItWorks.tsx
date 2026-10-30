import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    title: "See the access",
    description:
      "Locate supported MCP configuration files. The report names the sources it checked and flags files it could not read.",
  },
  {
    title: "Understand the risk",
    description:
      "Connect configuration evidence with known or inferred tool capabilities. Boppi explains potential risk, assumptions, and unknowns; it does not show an attack happened.",
  },
  {
    title: "Control permissions",
    description:
      "Compare a proposed change and its tradeoffs. Today, remove a supported MCP server entry with your approval. More granular controls are in development.",
  },
  {
    title: "Verify the change",
    description:
      "Rescan with boppi verify and an earlier JSON export to compare the result. Configuration verification does not prove a running client has stopped using access.",
  },
  {
    title: "Monitor access",
    description:
      "Today, rerun scans and compare local history. In development: foreground configuration watching and optional Claude Code event capture. Continuous monitoring is not publicly available.",
  },
];

const HowItWorks = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="how-it-works" className="py-16 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-14 max-w-2xl">
          <p className="section-kicker">Method</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] [text-wrap:balance]">From access to action.</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            See → understand → control → verify → monitor. Start with supported configuration
            checks today; the wider platform is in development.
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
