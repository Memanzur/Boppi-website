import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Demo() {
  const [frame, setFrame] = useState(false);
  useEffect(() => { setFrame(true); }, []);
  return <div className="min-h-screen bg-background"><Nav /><main id="main" className="max-w-7xl mx-auto px-4 md:px-6 py-10 space-y-6">
    <header className="max-w-3xl space-y-4"><p className="section-kicker">Synthetic demo · unpublished candidate</p><h1 className="text-4xl font-semibold tracking-tight">Boppi: Explore a finding before scanning.</h1><p className="text-muted-foreground">These are fictional AI connections and potential exposure paths. The demo does not inspect your device, connect to a server, or change permissions. A preview only simulates removing a sample server; reset it whenever you like.</p><p>Choose a scenario, select a path to inspect its evidence and uncertainty, then preview a change and see what remains.</p><div className="flex flex-wrap gap-5"><Link className="text-primary underline" to="/checkup">Run a real guest checkup</Link><a className="text-primary underline" href="/boppi-demo.json">Demo version and source</a></div></header>
    <div className="w-full h-[85vh] min-h-[640px] overflow-hidden rounded-xl border border-border bg-background">
      {frame ? <iframe title="Interactive synthetic Boppi checkup" src="/boppi-demo.html" sandbox="allow-scripts" className="h-full w-full border-0" /> : null}
    </div>
    <p className="text-sm text-muted-foreground">Configuration facts, inferred access, and unknowns are different evidence. A simulated improvement is not a verified fix on a real device. Actual candidate fixes use a separate preview, approval, backup, rescan, and rollback.</p>
  </main><Footer /></div>;
}
