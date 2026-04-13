import { Shield, Mail, MessageCircle, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Help strip: replaces the old Support section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <a
            href="https://memanzur.github.io/boppi-privacy/how-it-works.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">How it works</div>
              <div className="text-xs text-muted-foreground">Technical overview</div>
            </div>
          </a>
          <a
            href="mailto:boppii.ioo@gmail.com"
            className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">Email us</div>
              <div className="text-xs text-muted-foreground">boppii.ioo@gmail.com</div>
            </div>
          </a>
          <a
            href="https://form.typeform.com/to/vbiGSeh4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <MessageCircle className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">Feedback</div>
              <div className="text-xs text-muted-foreground">Missed a detection?</div>
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
              PII masking for teams using AI. Detection runs entirely in your browser.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://chromewebstore.google.com/detail/Boppi/pnfpbhjhmpfmkjdjpdbkapaibjmpmkld" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Chrome Web Store</a></li>
              <li><a href="#demo" className="hover:text-primary transition-colors">Live demo</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it works</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#admin" className="hover:text-primary transition-colors">For IT admins</a></li>
              <li><a href="mailto:boppii.ioo@gmail.com" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="https://memanzur.github.io/boppi-privacy/how-it-works.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Docs</a></li>
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
          <div className="flex flex-col md:flex-row md:items-center md:gap-3 text-center md:text-left">
            <p>© 2026 Boppi. Built by Melody in Utah.</p>
            <span className="hidden md:inline opacity-40">·</span>
            <p className="font-mono text-xs opacity-70">v0.7.0 · April 2026</p>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-success" />
            <span>Local processing · No data sent anywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
