import { Building2, Stethoscope, Scale, Landmark, GraduationCap, FileSpreadsheet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const profiles = [
  { icon: Stethoscope, label: "Healthcare", hint: "HIPAA patterns" },
  { icon: Building2, label: "Finance", hint: "Account + tax IDs" },
  { icon: Scale, label: "Legal", hint: "Client + case data" },
  { icon: Landmark, label: "Government", hint: "CUI markers" },
  { icon: GraduationCap, label: "Education", hint: "FERPA patterns" },
];

const ComingSoon = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  return (
    <section id="admin" className="py-16 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="reveal text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
            <span className="text-sm font-semibold text-secondary">Built for IT Admins</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Industry profiles + audit trail</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flip on industry presets, set company-wide masking policies, and export audit logs
            for compliance reviews.
          </p>
        </div>

        {/* Compact profile chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <div
                key={profile.label}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card/60 backdrop-blur-sm border border-secondary/20 hover:border-secondary/50 transition-colors"
              >
                <Icon className="w-4 h-4 text-secondary shrink-0" />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm font-semibold">{profile.label}</span>
                  <span className="text-[11px] text-muted-foreground hidden sm:inline">
                    {profile.hint}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CSV export callout */}
        <Card className="p-5 md:p-6 bg-card/40 backdrop-blur-sm border-secondary/20 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="shrink-0 p-3 rounded-xl bg-secondary/15">
              <FileSpreadsheet className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">One-click CSV audit export</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Export a full audit log of every detection, every pause, and every unmask.
                Hand it straight to compliance.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ComingSoon;
