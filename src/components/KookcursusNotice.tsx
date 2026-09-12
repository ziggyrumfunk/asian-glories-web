'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/i18n';

/**
 * Site-wide announcement dialog for the cooking course on Wednesday
 * 7 October 2026. Reuses the closure-* dialog styles in globals.css.
 *
 * - Shows at most once per 8 days per visitor (timestamp in localStorage,
 *   refreshed the moment it appears).
 * - Deactivates itself after 7 October; no code change needed on the 8th.
 * - Skipped on the /kookcursus page itself.
 * - Waits a beat so the LoadingCurtain can finish before the dialog fades in.
 */
const STORAGE_KEY = 'ag-notice-kookcursus';
const HIDE_AFTER = new Date('2026-10-08T00:00:00');
const REPEAT_AFTER_MS = 8 * 24 * 60 * 60 * 1000;
const SHOW_DELAY_MS = 2600;

export default function KookcursusNotice() {
  const t = useT();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (new Date() >= HIDE_AFTER) return;
    try {
      const last = Number(localStorage.getItem(STORAGE_KEY) || 0);
      if (last && Date.now() - last < REPEAT_AFTER_MS) return;
    } catch {
      /* storage unavailable: show anyway, just without the 8-day memory */
    }
    const timer = setTimeout(() => {
      if (window.location.pathname.startsWith('/kookcursus')) return;
      setOpen(true);
      try {
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
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
      aria-label={t('kookpop.title')}
      onClick={() => setOpen(false)}
    >
      <div className="closure-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="closure-x"
          aria-label={t('kookpop.close')}
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
        <p className="closure-eyebrow">{t('kookpop.eyebrow')}</p>
        <h2 className="closure-title">{t('kookpop.title')}</h2>
        <p className="closure-body">{t('kookpop.body')}</p>
        <Link href="/kookcursus" className="closure-btn" onClick={() => setOpen(false)}>
          {t('kookpop.btn')}
        </Link>
      </div>
    </div>
  );
}
