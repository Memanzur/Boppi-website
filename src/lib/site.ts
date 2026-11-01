/**
 * Address already published on this marketing site.
 * Confirm with Melody before replacing it.
 */
export const CONTACT_EMAIL = "boppii.ioo@gmail.com";

export function contactMailto(subject: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
