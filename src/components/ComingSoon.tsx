import { Shield, FileCheck, Settings, Lock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const comingSoonFeatures = [
  {
    icon: Shield,
    title: "Safe Sandbox",
    description: "Open suspicious links and files in an isolated environment, protecting your system from threats."
  },
  {
    icon: FileCheck,
    title: "Compliance Dashboard",
    description: "Automate compliance with HIPAA, SOC2, and GDPR. Generate reports with one click."
  },
  {
    icon: Settings,
    title: "Admin Controls",
    description: "Enterprise-level management, audits, and team oversight for organizations."
  },
  {
    icon: Lock,
    title: "Advanced Fraud Detection",
    description: "Machine learning identifies sophisticated scams and phishing attempts before they fool you."
  },
  {
    icon: Users,
    title: "Senior Protection Mode",
    description: "Simplified interface with extra safeguards designed for older users and their caregivers."
  }
];

const ComingSoon = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-4">
            <span className="text-sm font-semibold text-secondary">Coming Soon</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">What's Next</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced features in development to provide even more comprehensive protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingSoonFeatures.map((feature, index) => {
            const Icon = feature.icon;
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
                  
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
