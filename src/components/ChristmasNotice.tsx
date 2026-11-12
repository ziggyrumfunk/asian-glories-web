'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { kerstActive } from '@/lib/kerst';

/**
 * Site-wide announcement of the Kerst tasting menu (25 and 26 December
 * 2026), linking to /kerst. Reuses the closure-* dialog styles in globals.css.
 *
 * - Shows at most once per 8 days per visitor (timestamp in localStorage,
 *   refreshed the moment it appears).
 * - Deactivates itself after Boxing Day (lib/kerst.ts); no code change needed.
 * - Skipped on the /kerst page itself.
 * - Waits a beat so the LoadingCurtain can finish before the dialog fades in.
 */
const STORAGE_KEY = 'ag-notice-kerst-2026-v2';
const REPEAT_AFTER_MS = 8 * 24 * 60 * 60 * 1000;
const SHOW_DELAY_MS = 2600;

export default function ChristmasNotice() {
  const t = useT();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!kerstActive()) return;
    try {
      const last = Number(localStorage.getItem(STORAGE_KEY) || 0);
      if (last && Date.now() - last < REPEAT_AFTER_MS) return;
    } catch {
      /* storage unavailable: show anyway, just without the 8-day memory */
    }
    const timer = setTimeout(() => {
      if (window.location.pathname.startsWith('/kerst')) return;
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
      aria-label={t('kerstpop.title')}
      onClick={() => setOpen(false)}
    >
      <div className="closure-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="closure-x"
          aria-label={t('kerstpop.close')}
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
        <p className="closure-eyebrow">{t('kerstpop.eyebrow')}</p>
        <h2 className="closure-title">{t('kerstpop.title')}</h2>
        <p className="closure-body">{t('kerstpop.body')}</p>
        <Link href="/kerst" className="closure-btn" onClick={() => setOpen(false)}>
          {t('kerstpop.btn')}
        </Link>
      </div>
    </div>
  );
}
