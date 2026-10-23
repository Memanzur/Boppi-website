import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    title: "Read settings",
    description:
      "Locate supported MCP configuration files. The report names the sources it checked and flags files it could not read.",
  },
  {
    title: "Identify possible access",
    description:
      "Infer tool capabilities from package identity, commands, directory arguments, and environment variable names. Inferred access is labeled; it is not a live permission check.",
  },
  {
    title: "Connect the evidence",
    description:
      "Agents, servers, capabilities, data, credentials, and destinations become nodes. Every edge records where it came from.",
  },
  {
    title: "Explain potential risks",
    description:
      "Six exposure-path templates look for combinations such as file access plus an external destination. These are modeled possibilities, not evidence of an attack.",
  },
  {
    title: "Compare and verify",
    description:
      "Simulate removing a grant and count the modeled paths that disappear. Review the tradeoff, make your chosen edit, then use boppi verify with an earlier JSON scan to compare the result.",
  },
];

const HowItWorks = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="how-it-works" className="py-16 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-14 max-w-2xl">
          <p className="section-kicker">Method</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] [text-wrap:balance]">A local check. A clearer next step.</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            The scanner reads configuration, models potential risks, and helps you review changes.
            It does not start your MCP servers or upload a scan.
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
