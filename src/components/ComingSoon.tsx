import { Building2, Stethoscope, Scale, Landmark, GraduationCap, FileSpreadsheet } from "lucide-react";
import { Card } from "@/components/ui/card";

const profiles = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "HIPAA-aware patterns: patient names, MRNs, diagnoses, insurance IDs, PHI.",
  },
  {
    icon: Building2,
    title: "Finance",
    description: "Account numbers, routing numbers, SSNs, tax IDs, credit cards, wire details.",
  },
  {
    icon: Scale,
    title: "Legal",
    description: "Client names, case numbers, privileged terms, settlement figures, docket IDs.",
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Classification markers, internal identifiers, CUI categories, clearance cues.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "FERPA-aware patterns: student names, grades, SIDs, disciplinary records.",
  },
  {
    icon: FileSpreadsheet,
    title: "CSV audit export",
    description: "Export a full audit log of every detection, every pause, and every unmask. One click.",
  },
];

const ComingSoon = () => {
  return (
    <section id="admin" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-4">
            <span className="text-sm font-semibold text-secondary">Built for IT Admins</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Industry profiles + audit trail</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            IT managers can set company-wide masking policies, flip on industry presets,
            and export CSV audit logs for compliance reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/30 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all" />

                <div className="relative z-10">
                  <div className="p-3 rounded-2xl bg-secondary/10 inline-flex mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{profile.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{profile.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
