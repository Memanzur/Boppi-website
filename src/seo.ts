import { LINKS, SCAN_VERSION } from "./lib/links";

export const ORIGIN = "https://boppi.io";
export const OG_IMAGE = `${ORIGIN}/og-image.png`;
export const OG_ALT = "Boppi, AI agent security scanner";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  index: boolean;
};

const pages: Record<string, PageSeo> = {
  "/": {
    title: "Boppi | AI agent security scanner for MCP servers",
    description:
      "Boppi is an AI agent security scanner. Run an AI access audit of MCP server security on your machine, then fix risky permissions.",
    path: "/",
    index: true,
  },
  "/checkup": {
    title: "Boppi checkup | Free AI access audit",
    description:
      "Free Boppi AI access audit on your machine. No account. Reads MCP server configuration locally and does not upload the scan.",
    path: "/checkup",
    index: true,
  },
  "/demo": {
    title: "Boppi demo | Sample AI agent security scan",
    description:
      "Boppi demo of an AI agent security scan. Fictional MCP servers and exposure paths only. Your device is not inspected or changed.",
    path: "/demo",
    index: true,
  },
  "/privacy": {
    title: "Boppi privacy policy | What the scanner stores",
    description:
      "Boppi privacy policy. The AI agent security scanner reads configuration on your device and sends nothing unless you push a sanitized inventory.",
    path: "/privacy",
    index: true,
  },
  "/terms": {
    title: "Boppi terms of service | Scanner and control plane",
    description:
      "Boppi terms of service for the website, the open source AI agent security scanner, and the hosted control plane.",
    path: "/terms",
    index: true,
  },
};

const notFound: PageSeo = {
  title: "Boppi | Page not found",
  description:
    "That Boppi page does not exist. Return home for the AI agent security scanner and an MCP server access audit.",
  path: "/",
  index: false,
};

export const prerenderRoutes = ["/", "/checkup", "/demo", "/privacy", "/terms"] as const;

export function pageFor(pathname: string): PageSeo {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname || "/";
  if (path === "/terms-of-service") return pages["/terms"];
  return pages[path] ?? notFound;
}

export function canonicalUrl(page: PageSeo): string | null {
  if (!page.index) return null;
  return page.path === "/" ? `${ORIGIN}/` : `${ORIGIN}${page.path}`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Head tags for one route. Production HTML is prerendered from this string. */
export function headBlock(pathname: string) {
  const page = pageFor(pathname);
  const url = canonicalUrl(page);
  const robots = page.index ? "index, follow" : "noindex, nofollow";
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const lines = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" data-seo="" />`,
    `<meta name="robots" content="${robots}" data-seo="" />`,
  ];
  if (url) lines.push(`<link rel="canonical" href="${url}" data-seo="" />`);
  lines.push(
    `<meta property="og:site_name" content="Boppi" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${title}" data-seo="" />`,
    `<meta property="og:description" content="${description}" data-seo="" />`,
  );
  if (url) lines.push(`<meta property="og:url" content="${url}" data-seo="" />`);
  lines.push(
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeHtml(OG_ALT)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" data-seo="" />`,
    `<meta name="twitter:description" content="${description}" data-seo="" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(OG_ALT)}" />`,
  );
  return lines.join("\n    ");
}

/** Stable JSON-LD graph. The CSP script hash is the SHA-256 of this exact string. */
export function jsonLd() {
  const version = SCAN_VERSION.replace(/^v/, "");
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${ORIGIN}/#organization`,
        name: "Boppi",
        url: `${ORIGIN}/`,
        logo: {
          "@type": "ImageObject",
          url: `${ORIGIN}/boppi-logo.png`,
          width: 1024,
          height: 1024,
        },
        sameAs: [LINKS.github, LINKS.npm],
      },
      {
        "@type": "WebSite",
        "@id": `${ORIGIN}/#website`,
        name: "Boppi",
        url: `${ORIGIN}/`,
        description: "Boppi scans and fixes risky AI agent access on developer machines.",
        publisher: { "@id": `${ORIGIN}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${ORIGIN}/#software`,
        name: "Boppi CLI",
        alternateName: "@boppi/cli",
        url: `${ORIGIN}/`,
        description:
          "AI agent security scanner. Audits MCP server security and AI access on a developer machine with npx @boppi/cli scan. Tested on macOS. Windows and Linux paths are experimental.",
        applicationCategory: "SecurityApplication",
        operatingSystem: "macOS",
        softwareVersion: version,
        downloadUrl: LINKS.npm,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          url: `${ORIGIN}/`,
        },
        publisher: { "@id": `${ORIGIN}/#organization` },
      },
    ],
  });
}
