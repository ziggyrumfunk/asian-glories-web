'use client';

import { useT } from '@/lib/i18n';
import { formatRange, getWeekHours } from '@/lib/hours';

/** The seven opening-hours rows used on the home and reserveer pages. */
export default function OpeningHoursRows() {
  const t = useT();
  return (
    <>
      {getWeekHours().map((d) => (
        <div className="hr" key={d.day}>
          <span>{t(`day.${d.day}`)}</span>
          <span>{d.opens ? `${formatRange(d)}${d.mark ? ' *' : ''}` : t('day.closed')}</span>
        </div>
      ))}
    </>
  );
}
