export const SCAN_COMMAND = "npx boppi scan";
export const SCAN_VERSION = "v0.3.0";

export const LINKS = {
  github: "https://github.com/Memanzur/boppi-scan",
  npm: "https://www.npmjs.com/package/boppi",
  issues: "https://github.com/Memanzur/boppi-scan/issues",
  app: "https://app.boppi.io",
  // "Create a beta workspace" lands on account creation, not the sign-in page.
  signup: "https://app.boppi.io/signup",
  email: "boppii.ioo@gmail.com",
  talk: "mailto:boppii.ioo@gmail.com?subject=Boppi%20for%20teams",
  contact: "mailto:boppii.ioo@gmail.com",
} as const;

// Bundled synthetic demo; publishing the website remains a separate decision.
export const BETA_DEMO = {
  path: "/demo",
  live: true,
  preview: "#beta-preview",
} as const;
