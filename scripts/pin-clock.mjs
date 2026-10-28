/** Preload for build-demo.mjs: pins Date to DEMO_PINNED_TIME (the candidate's built_at) so the demo build is reproducible. Never used outside the demo build. */
const fixed = Date.parse(process.env.DEMO_PINNED_TIME);
if (!Number.isFinite(fixed)) throw new Error('DEMO_PINNED_TIME must be an ISO time');
const RealDate = Date;
class PinnedDate extends RealDate {
  constructor(...args) { if (args.length) super(...args); else super(fixed); }
  static now() { return fixed; }
}
globalThis.Date = PinnedDate;
