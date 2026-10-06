'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { formatRange, NEW_SCHEDULE } from '@/lib/hours';

/**
 * Site-wide announcement of the new opening hours (seven nights a week from
 * Monday 19 October 2026). Reuses the closure-* dialog styles in globals.css.
 *
 * - Active from 7 October until 1 November 2026; outside that window it
 *   renders nothing, so it needs no code change to start or stop.
 * - Shows once per visitor (flag in localStorage, set the moment it appears).
 * - Waits a beat so the LoadingCurtain can finish before the dialog fades in.
 */
const STORAGE_KEY = 'ag-notice-openingstijden-2026';
const SHOW_FROM = new Date('2026-10-07T00:00:00+02:00');
const HIDE_AFTER = new Date('2026-11-02T00:00:00+01:00');
const SHOW_DELAY_MS = 2600;

export default function OpeningNotice() {
  const t = useT();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now < SHOW_FROM || now >= HIDE_AFTER) return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* storage unavailable: show anyway, just not once-per-visitor */
    }
    const timer = setTimeout(() => {
      setOpen(true);
      try {
        localStorage.setItem(STORAGE_KEY, '1');
      } catch {
        /* ignore */
      }
    }, SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Escape closes, and page scroll is locked while the dialog is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const byDay = Object.fromEntries(NEW_SCHEDULE.map((d) => [d.day, d]));
  const rows = [
    { label: t('notice.hours.monthu'), hours: formatRange(byDay.mon) },
    { label: t('day.fri'), hours: formatRange(byDay.fri) },
    { label: t('day.sat'), hours: formatRange(byDay.sat) },
    { label: t('day.sun'), hours: formatRange(byDay.sun) },
  ];

  return (
    <div
      className="closure-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t('notice.title')}
      onClick={() => setOpen(false)}
    >
      <div className="closure-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="closure-x"
          aria-label={t('notice.close')}
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
        <p className="closure-eyebrow">{t('notice.eyebrow')}</p>
        <h2 className="closure-title">{t('notice.title')}</h2>
        <p className="closure-body">{t('notice.body')}</p>
        <div className="closure-hours">
          {rows.map((r) => (
            <p key={r.label}>
              <span>{r.label}</span>
              <span>{r.hours}</span>
            </p>
          ))}
        </div>
        <Link href="/reserveer" className="closure-btn" onClick={() => setOpen(false)}>
          {t('notice.btn')}
        </Link>
      </div>
    </div>
  );
}
