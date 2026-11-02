import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LINKS } from "@/lib/links";

const Platform = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="platform" className="py-16 px-6 relative bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-10 space-y-3">
          <p className="section-kicker">Cloud workspace</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">One place for the team.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Available now: history, team invites, MFA, versioned policies, and exports.
            Cloud monitoring is in beta. The workspace does not make enterprise-wide permission changes, block a running tool, or grant full just-in-time access.
          </p>
          <a
            href={LINKS.privateBeta}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Join the private beta
          </a>
        </div>

        <div id="beta-preview" className="scroll-mt-24 max-w-3xl mx-auto rounded-2xl border border-border bg-card p-6 md:p-8">
          <p className="section-kicker">Interactive demo · sample data</p>
          <h3 className="text-2xl font-semibold mb-3">See a finding before you scan.</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The demo uses made-up connections. Nothing on your device is scanned or changed.
          </p>
          <Button className="mt-5 bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
            <a href="/demo">Explore the demo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Platform;
