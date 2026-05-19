'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';

export default function Nav() {
  const { locale, setLocale, t } = useI18n();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/#verhaal', label: t('nav.about') },
    { href: '/menu', label: t('nav.menu') },
    { href: '/wijnkaart', label: t('nav.wine') },
    { href: '/boek', label: t('nav.book') },
    { href: '/#evenementen', label: t('nav.events') },
    { href: '/#openingstijden', label: t('nav.hours') },
    { href: '/#contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between transition-[background,padding] duration-500 ease-ease`}
        style={{
          padding: solid ? '14px var(--pad)' : '26px var(--pad)',
          background: solid ? 'rgba(11,45,35,0.97)' : 'transparent',
          backdropFilter: solid ? 'blur(16px)' : undefined,
          WebkitBackdropFilter: solid ? 'blur(16px)' : undefined,
        }}
      >
        <Link href="/" aria-label="Asian Glories home">
          <img
            src="/images/asian-glories-logo-wide-normal.png"
            alt="Asian Glories"
            width={180}
            height={30}
            style={{
              height: solid ? 24 : 30,
              width: 'auto',
              filter: 'brightness(0) invert(1)',
              transition: 'height .4s cubic-bezier(0.16,1,0.3,1)',
            }}
          />
        </Link>

        <ul className="hidden md:flex list-none gap-[34px] items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-[11px] tracking-[0.2em] uppercase text-white/80 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-1 text-[10px] tracking-[0.18em] uppercase text-white/60">
            <button
              type="button"
              onClick={() => setLocale('nl')}
              aria-pressed={locale === 'nl'}
              className="px-1 transition-colors"
              style={{ color: locale === 'nl' ? '#fced88' : undefined }}
            >
              NL
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
              className="px-1 transition-colors"
              style={{ color: locale === 'en' ? '#fced88' : undefined }}
            >
              EN
            </button>
          </li>
          <li>
            <a
              href="mailto:info@asianglories.nl"
              className="text-[11px] font-bold tracking-[0.18em] uppercase text-green bg-gold px-6 py-[10px] rounded-[1px] hover:bg-gold-deep transition-all"
            >
              {t('nav.reserve')}
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className="block w-[22px] h-[1.5px] bg-white transition-transform duration-300"
            style={{ transform: open ? 'translateY(6.5px) rotate(45deg)' : undefined }}
          />
          <span
            className="block w-[22px] h-[1.5px] bg-white transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-[22px] h-[1.5px] bg-white transition-transform duration-300"
            style={{ transform: open ? 'translateY(-6.5px) rotate(-45deg)' : undefined }}
          />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-[190] bg-green-dark flex flex-col items-center justify-center gap-10 transition-opacity duration-400 ease-ease ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-serif font-light text-cream hover:text-gold"
            style={{ fontSize: 'clamp(34px,8vw,56px)', letterSpacing: '0.03em' }}
          >
            {l.label}
          </Link>
        ))}
        <a
          href="mailto:info@asianglories.nl"
          onClick={() => setOpen(false)}
          className="text-[13px] font-bold tracking-[0.16em] uppercase bg-gold text-green px-[42px] py-[15px] rounded-[1px]"
        >
          {t('nav.reserve')}
        </a>
        <div className="flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-cream/60 mt-4">
          <button
            type="button"
            onClick={() => {
              setLocale('nl');
            }}
            aria-pressed={locale === 'nl'}
            className="px-1"
            style={{ color: locale === 'nl' ? '#fced88' : undefined }}
          >
            NL
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            onClick={() => {
              setLocale('en');
            }}
            aria-pressed={locale === 'en'}
            className="px-1"
            style={{ color: locale === 'en' ? '#fced88' : undefined }}
          >
            EN
          </button>
        </div>
      </div>
    </>
  );
}
