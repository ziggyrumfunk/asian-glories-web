/**
 * The Kerst season on the site (Kerst menu on 25 and 26 December 2026).
 *
 * While it runs: Kerst link in the nav, ChristmasNotice popup, /kerst in the
 * sitemap. From KERST_ENDS on, all of that switches off by itself and
 * src/middleware.ts sends /kerst to the home page. No code change needed.
 */
export const KERST_ENDS = new Date('2026-12-27T00:00:00+01:00');

export function kerstActive(now: Date = new Date()): boolean {
  return now < KERST_ENDS;
}
