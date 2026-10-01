import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    title: "Discover",
    description:
      "Locate each client's MCP config files. A missing file is reported as not found, never as an error.",
  },
  {
    title: "Infer capabilities",
    description:
      "Config files rarely declare what a server can do, so Boppi infers it from the package name, the command, directory arguments, and environment variable names. Each inference is labeled.",
  },
  {
    title: "Build the graph",
    description:
      "Agents, servers, capabilities, data, credentials, and destinations become nodes. Every edge records where it came from.",
  },
  {
    title: "Find paths",
    description:
      "Six templates describe chains that matter. A path is reported when the graph contains the whole chain, with a confidence that drops as the evidence gets weaker.",
  },
  {
    title: "Rank the fix",
    description:
      "For each grant, remove it and rerun the search. The grant that breaks the most paths is the recommended fix.",
  },
];

const HowItWorks = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="how-it-works" className="py-16 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal mb-14 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05] [text-wrap:balance]">
            How it{" "}
            <span className="font-serif italic font-normal text-primary">
              actually
            </span>{" "}
            works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Five steps, about twenty milliseconds, no network code anywhere in the package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="font-serif italic text-7xl md:text-8xl text-primary/50 leading-none mb-4 select-none">
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
