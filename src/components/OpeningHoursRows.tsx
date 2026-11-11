'use client';

import { useI18n } from '@/lib/i18n';
import { activeClosures, formatRange, WEEK_HOURS } from '@/lib/hours';

/** The seven opening-hours rows used on the home and reserveer pages. */
export default function OpeningHoursRows() {
  const { t, locale } = useI18n();
  return (
    <>
      {WEEK_HOURS.map((d) => (
        <div className="hr" key={d.day}>
          <span>{t(`day.${d.day}`)}</span>
          <span>{d.opens ? `${formatRange(d)}${d.mark ? ' *' : ''}` : t('day.closed')}</span>
        </div>
      ))}
      {activeClosures().map((c) => (
        <p key={c.from} style={{ marginTop: 14, fontSize: 16, fontWeight: 500 }}>
          {c[locale]}
        </p>
      ))}
    </>
  );
}
