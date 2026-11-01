import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { signupUrl } from "@/lib/app-url";

const examples = [
  {
    kicker: "Evidenced",
    title: "A finding tied to evidence",
    body: "A finding names what was observed, the evidence for it, and what is still unknown. It is kept with history, so a later visit can be compared with an earlier one.",
  },
  {
    kicker: "Potential",
    title: "An access path",
    body: "Claude Desktop, then an integration, then a capability, then a resource. That path is what the setup can potentially reach. It is not a record that a prompt used it.",
  },
  {
    kicker: "Modeled",
    title: "A change you approve",
    body: "Boppi can model a narrower change and propose it. You approve it and apply the steps yourself. The next scan is how the outcome is checked.",
  },
];

const ExampleReview = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="product" className="py-16 px-6 relative">
      {/* Old in-page links used #demo. Keep them landing on this section. */}
      <div id="demo" />
      <div className="max-w-6xl mx-auto relative">
        <div ref={sectionRef} className="reveal text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-sm font-semibold text-primary">Illustrated example</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">What you review</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This is not a scan of your computer. A real result comes from an
            enrolled computer and shows up in Boppi Cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((example) => (
            <Card
              key={example.kicker}
              className="p-6 bg-card/60 backdrop-blur-sm border-primary/20"
            >
              <div className="text-xs uppercase tracking-[0.16em] text-primary mb-3">
                {example.kicker}
              </div>
              <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {example.body}
              </p>
            </Card>
          ))}
        </div>

        <Card className="mt-6 p-6 md:p-8 bg-card/60 backdrop-blur-sm border-primary/20 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                Sample finding, not live data
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Filesystem capability on Claude Desktop
              </h3>
              <dl className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="text-muted-foreground shrink-0">State</dt>
                  <dd>Evidenced from configuration on an enrolled computer</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-muted-foreground shrink-0">Path</dt>
                  <dd>Potential reach into a project directory</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-muted-foreground shrink-0">Unknown</dt>
                  <dd>Whether any prompt has read those files</dd>
                </div>
              </dl>
            </div>
            <div className="md:border-l md:border-border/50 md:pl-6">
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                Modeled next step
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Narrow the directory. You approve the proposal and edit the
                configuration yourself. Monitoring can tell you if a later
                report was missed, and an in-app alert can flag a meaningful
                change. The following scan is the check. Automatic enforcement
                is planned, and it is not what this step does.
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90"
          >
            <a href={signupUrl()}>
              Create a secure account
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExampleReview;
