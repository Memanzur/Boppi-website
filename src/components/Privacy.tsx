import { Shield, Lock, Eye, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const principles = [
  {
    icon: Shield,
    title: "No Data Collection",
    description: "Boppi never stores or sells your personal data. Everything stays on your device."
  },
  {
    icon: Lock,
    title: "Local Processing",
    description: "All scanning happens locally and ephemerally. Data is discarded immediately after processing."
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "No third-party analytics during beta. You control what information you share."
  },
  {
    icon: Database,
    title: "Optional Reporting",
    description: "Opt-in error reporting only—and only if you explicitly choose to help improve Boppi."
  }
];

const Privacy = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Privacy First</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy isn't just a feature—it's our foundation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/10">
          <h3 className="text-2xl font-bold mb-4">Privacy Policy Summary</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Zero Data Storage:</strong> Boppi does not store, transmit, 
              or retain any of your personal information. All detection and masking happens locally on your device.
            </p>
            <p>
              <strong className="text-foreground">No Third Parties:</strong> We don't use third-party analytics 
              or tracking during the beta period. Your browsing activity stays completely private.
            </p>
            <p>
              <strong className="text-foreground">Opt-in Only:</strong> Error reporting and feedback collection 
              are entirely optional. You choose what data, if any, you want to share.
            </p>
            <p>
              <strong className="text-foreground">Open Source:</strong> Our detection algorithms are transparent 
              and auditable. We believe in earning your trust through openness.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-border/50">
            <a href="/privacy" className="text-primary hover:underline font-semibold">
              Read Full Privacy Policy →
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Privacy;
