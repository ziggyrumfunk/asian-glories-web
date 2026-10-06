/**
 * Opening hours, single source for the home page, the reserveer page, the
 * opening-hours popup and the schema.org data in layout.tsx.
 *
 * From Monday 19 October 2026 the restaurant is open seven nights a week and
 * Friday lunch is dropped. getWeekHours() switches schedules on that date by
 * itself; the root layout revalidates hourly so the prerendered pages pick up
 * the change without a redeploy. Once the date has passed, CURRENT and the
 * switch can be deleted and NEW_SCHEDULE kept as the only schedule.
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

export const NEW_HOURS_FROM = new Date('2026-10-19T00:00:00+02:00');

const CURRENT_SCHEDULE: DayHours[] = [
  { day: 'mon', schemaDay: 'Monday', opens: '17:00', closes: '21:30', mark: true },
  { day: 'tue', schemaDay: 'Tuesday', opens: '17:00', closes: '21:30' },
  { day: 'wed', schemaDay: 'Wednesday' },
  { day: 'thu', schemaDay: 'Thursday', opens: '17:00', closes: '21:30' },
  { day: 'fri', schemaDay: 'Friday', opens: '12:00', closes: '22:00', mark: true },
  { day: 'sat', schemaDay: 'Saturday', opens: '12:00', closes: '22:00' },
  { day: 'sun', schemaDay: 'Sunday', opens: '12:00', closes: '21:00', mark: true },
];

export const NEW_SCHEDULE: DayHours[] = [
  { day: 'mon', schemaDay: 'Monday', opens: '17:00', closes: '21:30', mark: true },
  { day: 'tue', schemaDay: 'Tuesday', opens: '17:00', closes: '21:30' },
  { day: 'wed', schemaDay: 'Wednesday', opens: '17:00', closes: '21:30' },
  { day: 'thu', schemaDay: 'Thursday', opens: '17:00', closes: '21:30' },
  { day: 'fri', schemaDay: 'Friday', opens: '17:00', closes: '22:00', mark: true },
  { day: 'sat', schemaDay: 'Saturday', opens: '12:00', closes: '22:00' },
  { day: 'sun', schemaDay: 'Sunday', opens: '12:00', closes: '21:00', mark: true },
];

export function getWeekHours(now: Date = new Date()): DayHours[] {
  return now >= NEW_HOURS_FROM ? NEW_SCHEDULE : CURRENT_SCHEDULE;
}

export function formatRange(d: DayHours): string {
  return `${d.opens} – ${d.closes}`;
}
