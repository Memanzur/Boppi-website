import { Cloud, Mail, MessageCircle, FileText } from "lucide-react";
import { signupUrl } from "@/lib/app-url";
import { CONTACT_EMAIL, contactMailto } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <a
            href="#how-it-works"
            className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">How it works</div>
              <div className="text-xs text-muted-foreground">Account, enroll, review</div>
            </div>
          </a>
          <a
            href={contactMailto("Boppi Cloud")}
            className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">Email us</div>
              <div className="text-xs text-muted-foreground">{CONTACT_EMAIL}</div>
            </div>
          </a>
          <a
            href={contactMailto("Boppi feedback")}
            className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <MessageCircle className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">Feedback</div>
              <div className="text-xs text-muted-foreground">Tell us what the account got wrong</div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <img src="/boppi-logo.png" alt="Boppi" className="w-8 h-8" />
              <span className="text-xl font-bold gradient-text">boppi</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI access security and governance. The product is Boppi Cloud.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={signupUrl()} className="hover:text-primary transition-colors">Create an account</a></li>
              <li><a href="#product" className="hover:text-primary transition-colors">Example review</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Account</a></li>
              <li><a href="#planned" className="hover:text-primary transition-colors">Planned</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={contactMailto("Boppi Cloud")} className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#privacy" className="hover:text-primary transition-colors">What the account holds</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Boppi. Built by Melody in Utah.</p>
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-secondary" />
            <span>Boppi Cloud · Findings from an enrolled computer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
