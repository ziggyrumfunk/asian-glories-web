'use client';

import Link from 'next/link';
import { useT } from '@/lib/i18n';

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black" style={{ padding: '34px var(--pad)' }}>
      <div className="max-w-site mx-auto flex items-center justify-between gap-5 flex-wrap">
        <Link href="/" aria-label="Asian Glories home">
          <img
            src="/images/asian-glories-logo-wide-normal.png"
            alt="Asian Glories"
            style={{ height: 22, filter: 'brightness(0) invert(1)', opacity: 0.45 }}
          />
        </Link>
        <p className="text-[12px] font-light tracking-[0.06em] text-white/30">
          &copy; {year} Asian Glories. {t('footer.rights')}
        </p>
        <div className="flex gap-[26px]">
          <Link href="/menu" className="text-[11px] tracking-[0.14em] uppercase text-white/30 hover:text-gold transition-colors">
            {t('nav.menu')}
          </Link>
          <Link href="/wijnkaart" className="text-[11px] tracking-[0.14em] uppercase text-white/30 hover:text-gold transition-colors">
            {t('nav.wine')}
          </Link>
          <Link href="/boek" className="text-[11px] tracking-[0.14em] uppercase text-white/30 hover:text-gold transition-colors">
            {t('nav.book')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
