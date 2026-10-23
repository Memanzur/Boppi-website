export const SCAN_COMMAND = "npx boppi scan";
export const SCAN_VERSION = "v0.3.0";

export const LINKS = {
  github: "https://github.com/Memanzur/boppi-scan",
  npm: "https://www.npmjs.com/package/boppi",
  issues: "https://github.com/Memanzur/boppi-scan/issues",
  app: "https://app.boppi.io",
  email: "boppii.ioo@gmail.com",
  talk: "mailto:boppii.ioo@gmail.com?subject=Boppi%20for%20teams",
  contact: "mailto:boppii.ioo@gmail.com",
} as const;

// Enable only after the synthetic demo route exists and has been reviewed.
export const BETA_DEMO = {
  path: "/beta",
  live: false,
  preview: "#beta-preview",
} as const;
