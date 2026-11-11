/**
 * Opening hours, single source for the home page, the reserveer page and the
 * schema.org data in layout.tsx. Seven nights a week since 19 October 2026.
 */

export type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export type DayHours = {
  day: DayKey;
  schemaDay: string;
  opens?: string;
  closes?: string;
  /** Rendered with an asterisk: "* Laatste reservering". */
  mark?: boolean;
};

export const WEEK_HOURS: DayHours[] = [
  { day: 'mon', schemaDay: 'Monday', opens: '17:00', closes: '21:30', mark: true },
  { day: 'tue', schemaDay: 'Tuesday', opens: '17:00', closes: '21:30' },
  { day: 'wed', schemaDay: 'Wednesday', opens: '17:00', closes: '21:30' },
  { day: 'thu', schemaDay: 'Thursday', opens: '17:00', closes: '21:30' },
  { day: 'fri', schemaDay: 'Friday', opens: '17:00', closes: '22:00', mark: true },
  { day: 'sat', schemaDay: 'Saturday', opens: '12:00', closes: '22:00' },
  { day: 'sun', schemaDay: 'Sunday', opens: '12:00', closes: '21:00', mark: true },
];

/** One-off closures, shown under the hours and sent to Google until they have passed. */
export const CLOSURES = [
  {
    from: '2026-12-23',
    to: '2026-12-24',
    until: new Date('2026-12-25T00:00:00+01:00'),
    nl: 'Op 23 en 24 december zijn wij gesloten.',
    en: 'We are closed on 23 and 24 December.',
  },
];

export function activeClosures(now: Date = new Date()) {
  return CLOSURES.filter((c) => now < c.until);
}

export function formatRange(d: DayHours): string {
  return `${d.opens} \u2013 ${d.closes}`;
}
