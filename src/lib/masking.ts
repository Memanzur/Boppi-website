/**
 * Minimal PII detection + masking used for the marketing site's live demo.
 * This is NOT the production detection engine that ships in the extension.
 * It's a small cousin that demonstrates the same idea with a handful of
 * common patterns. Good enough to wow a visitor on boppi.io.
 */

export type DetectionKind = "SSN" | "Credit Card" | "Email" | "Phone" | "API Key";

export interface Detection {
  start: number;
  end: number;
  kind: DetectionKind;
  original: string;
  masked: string;
}

export type Segment =
  | { type: "plain"; text: string }
  | { type: "detected"; kind: DetectionKind; original: string; masked: string };

interface Matcher {
  kind: DetectionKind;
  pattern: RegExp;
  mask: (m: string) => string;
}

const matchers: Matcher[] = [
  {
    kind: "SSN",
    pattern: /\b\d{3}-\d{2}-\d{4}\b/g,
    mask: (m) => `***-**-${m.slice(-4)}`,
  },
  {
    kind: "Credit Card",
    pattern: /\b(?:\d{4}[\s-]?){3}\d{4}\b/g,
    mask: (m) => {
      const digits = m.replace(/[\s-]/g, "");
      return `**** **** **** ${digits.slice(-4)}`;
    },
  },
  {
    kind: "API Key",
    // Match common API-key prefixes like sk-, pk-, ghp_, xoxb- and Stripe keys.
    pattern: /\b(?:sk|pk|rk)[-_][A-Za-z0-9_-]{16,}/g,
    mask: (m) => `${m.slice(0, 3)}••••••`,
  },
  {
    kind: "Email",
    pattern: /\b[\w.+-]+@[\w-]+\.[\w.-]+\b/g,
    mask: () => "[Email]",
  },
  {
    kind: "Phone",
    // US-style phones: 415-555-0123, (415) 555-0123, +1 415.555.0123
    pattern: /(?:\+?1[-.\s]?)?\(?\b\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g,
    mask: () => "[Phone]",
  },
];

/**
 * Run every matcher over the input and return a sorted, non-overlapping list
 * of detections. Earlier matchers in the list win on conflict (SSNs beat
 * phone numbers, etc.).
 */
export function detect(text: string): Detection[] {
  const hits: Detection[] = [];

  for (const { kind, pattern, mask } of matchers) {
    // Clone per-call so we don't share lastIndex across renders.
    const re = new RegExp(pattern.source, pattern.flags);
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      hits.push({
        start: m.index,
        end: m.index + m[0].length,
        kind,
        original: m[0],
        masked: mask(m[0]),
      });
      // Guard against zero-width matches hanging the loop.
      if (m.index === re.lastIndex) re.lastIndex++;
    }
  }

  hits.sort((a, b) => a.start - b.start || b.end - a.end);

  // Drop overlaps: first match at a position wins.
  const clean: Detection[] = [];
  let cursor = 0;
  for (const h of hits) {
    if (h.start >= cursor) {
      clean.push(h);
      cursor = h.end;
    }
  }
  return clean;
}

/** Break a string into alternating plain / detected segments for rendering. */
export function segmentize(text: string, detections: Detection[]): Segment[] {
  const segs: Segment[] = [];
  let cursor = 0;
  for (const d of detections) {
    if (d.start > cursor) {
      segs.push({ type: "plain", text: text.slice(cursor, d.start) });
    }
    segs.push({
      type: "detected",
      kind: d.kind,
      original: d.original,
      masked: d.masked,
    });
    cursor = d.end;
  }
  if (cursor < text.length) {
    segs.push({ type: "plain", text: text.slice(cursor) });
  }
  return segs;
}

/** Convenience: the fully masked string, suitable for display or copy. */
export function maskText(text: string): string {
  const dets = detect(text);
  if (dets.length === 0) return text;
  let out = "";
  let cursor = 0;
  for (const d of dets) {
    out += text.slice(cursor, d.start) + d.masked;
    cursor = d.end;
  }
  out += text.slice(cursor);
  return out;
}
