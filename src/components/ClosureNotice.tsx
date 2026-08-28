'use client';

import { useEffect, useState } from 'react';
import { useT } from '@/lib/i18n';

/**
 * One-time site-wide announcement: Asian Glories is closed on Thursday
 * 10 September 2026 for a private event.
 *
 * - Shows once per visitor (flag in localStorage, set the moment it appears).
 * - Deactivates itself after the closure day; no code change needed on the 11th.
 * - Waits a beat so the LoadingCurtain can finish before the dialog fades in.
 *
 * To reuse for a future announcement: update the notice.* copy in
 * src/lib/i18n.tsx, then bump HIDE_AFTER and STORAGE_KEY below (a new key
 * makes the popup show again to visitors who saw the previous one).
 */
const STORAGE_KEY = 'ag-notice-2026-09-10';
const HIDE_AFTER = new Date('2026-09-11T00:00:00');
const SHOW_DELAY_MS = 2600;

export default function ClosureNotice() {
  const t = useT();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (new Date() >= HIDE_AFTER) return;
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
        <p className="closure-cta">
          {t('notice.cta')}{' '}
          <a href="mailto:info@asianglories.nl?subject=Prive-evenement">
            {t('notice.cta.link')}
          </a>
        </p>
        <button type="button" className="closure-btn" onClick={() => setOpen(false)}>
          {t('notice.close')}
        </button>
      </div>
    </div>
  );
}
