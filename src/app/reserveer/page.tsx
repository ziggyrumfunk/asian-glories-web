'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealScript from '@/components/Reveal';
import { useT } from '@/lib/i18n';
import './reserveer.css';

export default function ReserveerPage() {
  const t = useT();
  return (
    <>
      <Nav />
      <RevealScript />
      <main className="rsv">
        {/* HERO */}
        <header className="rsv-hero">
          <div
            className="rsv-hero__bg"
            style={{ backgroundImage: "url('/images/table-setting-big-table.jpg')" }}
          />
          <div className="rsv-hero__ov" />
          <div className="rsv-hero__inner">
            <p className="rsv-hero__eyebrow rv">{t('reserveer.eyebrow')}</p>
            <h1 className="rsv-hero__title rv d1">
              {t('reserveer.title1')}
              <br />
              <em>{t('reserveer.title2')}</em>
            </h1>
          </div>
        </header>

        {/* INTRO */}
        <section className="rsv-intro">
          <div className="rsv-intro__inner">
            <p className="rsv-intro__lead rv">{t('reserveer.intro1')}</p>
            <p className="rsv-intro__body rv d1">
              {t('reserveer.intro2')}{' '}
              <a className="rsv-link" href="mailto:info@asianglories.nl">
                info@asianglories.nl
              </a>{' '}
              {t('reserveer.intro2.or')}{' '}
              <a className="rsv-link" href="tel:+31102542071">
                010 254 2071
              </a>
              .
            </p>

            <div className="rsv-cta rv d2">
              <span className="rsv-cta__arrow" aria-hidden="true">
                &#8600;
              </span>
              <div>
                <p className="rsv-cta__label">{t('reserveer.cta.label')}</p>
                <p className="rsv-cta__sub">{t('reserveer.cta.sub')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* USEFUL INFO */}
        <section className="rsv-info">
          <div className="rsv-info__inner">
            <p className="lbl rv">{t('reserveer.useful')}</p>

            <div className="rsv-info__grid">
              {/* Opening hours */}
              <div className="rsv-info__col rv d1">
                <h3 className="rsv-info__h3">{t('home.info.hours')}</h3>
                <div className="hr">
                  <span>{t('day.mon')}</span>
                  <span>17:00 &ndash; 21:30 *</span>
                </div>
                <div className="hr">
                  <span>{t('day.tue')}</span>
                  <span>{t('day.closed')}</span>
                </div>
                <div className="hr">
                  <span>{t('day.wed')}</span>
                  <span>{t('day.closed')}</span>
                </div>
                <div className="hr">
                  <span>{t('day.thu')}</span>
                  <span>17:00 &ndash; 21:30</span>
                </div>
                <div className="hr">
                  <span>{t('day.fri')}</span>
                  <span>12:00 &ndash; 22:00 *</span>
                </div>
                <div className="hr">
                  <span>{t('day.sat')}</span>
                  <span>12:00 &ndash; 22:00</span>
                </div>
                <div className="hr">
                  <span>{t('day.sun')}</span>
                  <span>12:00 &ndash; 21:00 *</span>
                </div>
                <p className="rsv-info__note">{t('home.info.hours.note')}</p>
              </div>

              {/* Kreeft + Phone */}
              <div className="rsv-info__col rv d2">
                <div className="rsv-info__card">
                  <span className="rsv-info__icon" aria-hidden="true">
                    🦞
                  </span>
                  <h3 className="rsv-info__h3">{t('reserveer.kreeft.title')}</h3>
                  <p className="rsv-info__body">{t('reserveer.kreeft.text')}</p>
                </div>
                <div className="rsv-info__card">
                  <span className="rsv-info__icon" aria-hidden="true">
                    📞
                  </span>
                  <h3 className="rsv-info__h3">{t('reserveer.phone.title')}</h3>
                  <p className="rsv-info__body">
                    {t('reserveer.phone.text')}{' '}
                    <a className="rsv-link" href="tel:+31102542071">
                      010 254 2071
                    </a>{' '}
                    {t('reserveer.phone.or')}{' '}
                    <a className="rsv-link" href="mailto:info@asianglories.nl">
                      info@asianglories.nl
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
