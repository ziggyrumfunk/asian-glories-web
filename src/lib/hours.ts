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

export function formatRange(d: DayHours): string {
  return `${d.opens} \u2013 ${d.closes}`;
}
