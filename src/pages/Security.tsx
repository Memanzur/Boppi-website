import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LINKS } from "@/lib/links";

const Todo = ({ children }: { children: React.ReactNode }) => (
  <p className="rounded-lg border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm leading-relaxed text-amber-100">
    <strong className="font-semibold">TODO (founder): </strong>
    {children}
  </p>
);

export default function Security() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main id="main" className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <header className="space-y-4">
          <p className="section-kicker">Security</p>
          <h1 className="text-4xl font-semibold tracking-tight">What leaves the machine.</h1>
          <p className="text-muted-foreground leading-relaxed">
            This page describes the published scanner, <span className="font-mono text-foreground">boppi</span> 0.3.0,
            and the public behavior of the app at app.boppi.io. It does not describe commands that are not in that package.
          </p>
        </header>

        <section className="rounded-xl border border-border p-6 space-y-4" aria-labelledby="local-heading">
          <h2 id="local-heading" className="text-2xl font-semibold">What stays on the machine</h2>
          <p>
            <span className="font-mono">scan</span>, <span className="font-mono">agents</span>, <span className="font-mono">paths</span>,{" "}
            <span className="font-mono">plan</span>, <span className="font-mono">fix</span>, <span className="font-mono">verify</span>, and{" "}
            <span className="font-mono">history</span> do not contact Boppi. Installing the package with{" "}
            <span className="font-mono">npx</span> does contact the npm registry.
          </p>
          <p>
            A scan reads MCP configuration metadata for Claude Desktop, Claude Code, and Cursor, or one file you pass with{" "}
            <span className="font-mono">--config</span>. That metadata is server names, commands, arguments, and environment-variable names.
            The scanner does not read the contents of files a server could open, and it does not read environment-variable values.
            It does not record prompts or tool arguments, because a configuration scan never sees them.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Local history is a summary in <span className="font-mono text-foreground">~/.boppi/history.json</span>. Push does not upload that file.</li>
            <li>
              <span className="font-mono text-foreground">boppi fix</span> copies the original config to{" "}
              <span className="font-mono text-foreground">~/.boppi/backups/</span> with mode 600 before it edits. The backup is the original file, secrets included, and it stays on the machine.
            </li>
            <li>
              Path fingerprints are keyed with a secret in <span className="font-mono text-foreground">~/.boppi/fingerprint-key</span>. That key is not uploaded.
            </li>
            <li>HTML, JSON, and SARIF reports are files you write locally. They are not sent unless you share them yourself.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-border p-6 space-y-4" aria-labelledby="push-heading">
          <h2 id="push-heading" className="text-2xl font-semibold">What boppi push sends</h2>
          <p>
            <span className="font-mono">boppi push</span> is the only command in the published package that uses the network.
            It POSTs one scan's inventory to <span className="font-mono">/api/ingest</span> on the workspace you name.
            The default workspace is <span className="font-mono">https://app.boppi.io</span>. The request uses HTTPS and a collector bearer token.
            Plain HTTP is refused except for localhost. <span className="font-mono">--dry-run</span> prints the payload and sends nothing.
          </p>
          <p>The payload is a list of records for agents, integrations, permissions, and MCP servers. Each record can include:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Names, evidence class, confidence, and whether the record is stale.</li>
            <li>The command's file name, not its full path. Arguments after secret-like flags are replaced with a redaction marker.</li>
            <li>Absolute paths, home paths, and Windows paths in arguments are replaced with a fingerprint. The server config path in the record is a fingerprint.</li>
            <li>Capability names, and the names of environment variables that look like credentials. Values are not included.</li>
            <li>A network endpoint reduced to its origin, such as scheme and host.</li>
          </ul>
          <p>
            Findings and exposure paths are not in that payload. The scanner keeps them locally. A local JSON report can still show config paths under your home directory rewritten to start with <span className="font-mono">~</span>. That report is not the push body.
          </p>
          <p>
            Redaction covers recognized shapes: common token prefixes, JWTs, connection strings with passwords, and flags whose names say key, token, secret, or password.
            If a value looks like a secret in a field the model refuses, that client is not scanned. This is not a guarantee that arbitrary configuration text contains nothing private. Read the dry-run before you push.
          </p>
          <p className="text-muted-foreground">
            A <span className="font-mono">watch</span> command exists in scanner development branches. It is not in the published 0.3.0 package, so it is not a second upload path for <span className="font-mono">npx boppi</span> today.
          </p>
        </section>

        <section className="rounded-xl border border-border p-6 space-y-4" aria-labelledby="cloud-heading">
          <h2 id="cloud-heading" className="text-2xl font-semibold">The cloud app</h2>
          <p>
            app.boppi.io is served by Vercel. Its content security policy allows the browser to call Supabase.
            Sign-in is email and password. A new password must be at least 12 characters and include a lowercase letter, an uppercase letter, and a digit.
            Password reset sends a one-time link to the email on the account. Signup creates an organization workspace or joins one you were invited to.
          </p>
          <p>
            The signed-in app is where a workspace reviews inventory from <span className="font-mono">boppi push</span>, findings, history, versioned policies, remediation proposals, and exports.
            A remediation proposal needs a person's approval. The published scanner does not apply that approval by itself. Editing a config is a separate local step, and <span className="font-mono">boppi fix</span> asks again in the terminal.
          </p>
          <p>Multi-factor authentication is part of the account. The details below are not filled in, because they were not visible in the published scanner or on the logged-out app pages.</p>
          <Todo>
            Confirm whether MFA is optional or required, the factor type, and how recovery works. The control-plane repository was not available while this page was written, so enrollment steps are intentionally omitted.
          </Todo>
          <Todo>
            Confirm where account data and pushed inventory are stored. A public page response can name a Vercel edge that served the file. That edge is not a hosting region for the database.
          </Todo>
          <Todo>
            Confirm how long account data, pushed inventory, findings, policy versions, proposals, and exports are kept, and how a customer deletes them. This page does not claim a self-serve delete button.
          </Todo>
          <Todo>
            Confirm that an export is the redacted workspace data and not a copy of a local backup or a raw configuration file.
          </Todo>
        </section>

        <section className="rounded-xl border border-border p-6 space-y-4" aria-labelledby="site-heading">
          <h2 id="site-heading" className="text-2xl font-semibold">This website</h2>
          <p>
            boppi.io is a static site. The page source does not load an analytics or advertising script.
            The host can still log requests in order to serve the site. The <Link className="text-primary underline" to="/privacy">privacy policy</Link> is the longer draft of what the account stores.
          </p>
          <p>
            Report a vulnerability in the scanner to <a className="text-primary underline" href={LINKS.contact}>{LINKS.email}</a>.
            The scanner repository's security policy asks for a description, steps to reproduce, and the version affected.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
