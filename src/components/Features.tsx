import { Search, Waypoints, FileSearch, Bell, ListChecks, ScrollText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Search,
    title: "Discovery on an enrolled computer",
    description:
      "Claude Desktop, Claude Code, and Cursor. The inventory records what was found and leaves unknowns visible. Other AI products are outside this coverage.",
    category: "Discovery",
  },
  {
    icon: Waypoints,
    title: "Potential access paths",
    description:
      "A path runs from the agent toward a resource. You can see what the configuration evidences, separate from a path that is only modeled.",
    category: "Access",
  },
  {
    icon: FileSearch,
    title: "Evidenced findings, with history",
    description:
      "Each finding is backed by evidence and kept with history, so a later review can be compared with an earlier one.",
    category: "Evidence",
  },
  {
    icon: Bell,
    title: "Monitoring and in-app alerts",
    description:
      "Recurring assessments. If a report is missed, the account says so. Alerts are inside the app. Boppi does not claim to see a tool it could not reach.",
    category: "Monitoring",
  },
  {
    icon: ListChecks,
    title: "Propose, approve, check the next scan",
    description:
      "A narrower change can be modeled and proposed. You approve it. The steps are manual. The next scan is how the outcome is checked.",
    category: "Remediation",
  },
  {
    icon: ScrollText,
    title: "Audit, export, optional MFA",
    description:
      "The decision is written to an audit record. You can export your data. Multi-factor authentication is optional on the account.",
    category: "Account",
  },
];

const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  const rotateY = (x - 0.5) * 12;
  const rotateX = (0.5 - y) * 12;
  el.style.setProperty("--tilt-rx", `${rotateX}deg`);
  el.style.setProperty("--tilt-ry", `${rotateY}deg`);
  el.style.setProperty("--tilt-gx", `${x * 100}%`);
  el.style.setProperty("--tilt-gy", `${y * 100}%`);
};

const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  el.style.setProperty("--tilt-rx", "0deg");
  el.style.setProperty("--tilt-ry", "0deg");
};

const Features = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="features" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">What Boppi Cloud does</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These are in the account you create today. They describe potential
            reach and evidenced findings. A finding is not a promise about a
            later incident.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className="tilt-card relative overflow-hidden p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/40 hover:shadow-[0_10px_40px_-10px_hsl(310_90%_85%/0.35)] transition-[border-color,box-shadow] duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 group-hover:glow-secondary transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30">Available</Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {feature.category}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
