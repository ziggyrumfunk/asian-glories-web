'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AwardsStrip from '@/components/AwardsStrip';
import PressWall from '@/components/PressWall';
import RevealScript from '@/components/Reveal';
import ScrollZoom from '@/components/ScrollZoom';
import Link from 'next/link';
import { useT } from '@/lib/i18n';
import { onReserveClick } from '@/lib/formitable';
import './home.css';

export default function HomePage() {
  const t = useT();
  return (
    <>
      {/* Preload the hero background — it's the largest contentful paint candidate. */}
      <link
        rel="preload"
        as="image"
        href="/images/warm-interior.jpg"
        fetchPriority="high"
      />
      <Nav />
      <RevealScript />
      <main>
        {/* HERO */}
        <section className="hero">
          <div
            className="hero__bg parallax-bg"
            style={{ backgroundImage: "url('/images/warm-interior.jpg')" }}
          />
          <div className="hero__ov" />
          <div className="hero__c">
            <div className="hero__brand rv">
              <img
                src="/images/asian-glories-logo-wide-normal.png"
                alt="Asian Glories"
                width={360}
                height={60}
              />
            </div>
            <div className="kicker rv d1">
              <div className="kicker-line" />
              <span>{t('home.hero.kicker')}</span>
            </div>
            <h1 className="rv d2">
              {t('home.hero.title1')}
              <br />
              {t('home.hero.title2')} <em>{t('home.hero.title3')}</em>
            </h1>
            <p className="hero__sub rv d3">{t('home.hero.subtitle')}</p>
            <div className="hero__acts rv d4">
              <a href="#verhaal" className="btn-l">
                {t('home.hero.discover')}
              </a>
              <Link href="/menu" className="btn-g">
                {t('home.hero.viewmenu')}
              </Link>
            </div>
          </div>
          <div className="scrl">
            <div className="scrl-ln" />
            <span>{t('home.hero.scroll')}</span>
          </div>
        </section>

        <AwardsStrip />

        {/* MENU CTA */}
        <div className="menu-cta">
          <div className="menu-cta__in">
            <div>
              <p className="menu-cta__label">{t('home.menucta.label')}</p>
              <p className="menu-cta__desc">{t('home.menucta.desc')}</p>
            </div>
            <Link
              href="/menu"
              className="btn-g"
              style={{ background: '#114032', color: '#fced88', flexShrink: 0 }}
            >
              {t('home.menucta.btn')}
            </Link>
          </div>
        </div>

        {/* ABOUT */}
        <section className="intro" id="verhaal">
          <div className="intro__in">
            <div className="imgs rv">
              <ScrollZoom
                src="/images/interior.jpg"
                alt="Interieur Asian Glories Rotterdam"
                className="img-a"
                from={1.28}
                to={1.0}
              />
              <ScrollZoom
                src="/images/owner-and-head-chef.jpg"
                alt="Chef-kok van Asian Glories"
                className="img-b"
                from={1.22}
                to={1.0}
              />
            </div>
            <div>
              <p className="lbl rv">{t('home.about.label')}</p>
              <h2 className="rv d1">
                {t('home.about.title1')}
                <br />
                <em>{t('home.about.title2')}</em>
              </h2>
              <p className="body-txt rv d2">{t('home.about.body1')}</p>
              <p className="body-txt rv d3">{t('home.about.body2')}</p>
              <Link href="/menu" className="link-ul rv d4">
                {t('home.about.link')}
              </Link>
            </div>
          </div>
        </section>

        {/* PARALLAX FEATURE — Ken Burns zoom on scroll. */}
        <div className="pf">
          <ScrollZoom
            src="/images/cozy-interior-daytime.jpg"
            alt="Sfeervol interieur van Asian Glories overdag"
            className="pf__zoom"
            objectPosition="center"
            from={1.18}
            to={1.0}
          />
          <div className="pf__ov" />
          <div className="pf__c">
            <p className="lbl rv">{t('home.feature.label')}</p>
            <h2 className="rv d1">
              {t('home.feature.title1')}
              <br />
              <em>{t('home.feature.title2')}</em>
            </h2>
            <p className="body-txt rv d2">{t('home.feature.body')}</p>
            <Link href="/menu" className="btn-g rv d3">
              {t('home.feature.btn')}
            </Link>
          </div>
        </div>

        {/* DISHES */}
        <section className="ds">
          <div className="ds__hd">
            <div>
              <p className="lbl rv">{t('home.dishes.label')}</p>
              <h2 className="rv d1">
                {t('home.dishes.title1')}
                <br />
                <em>{t('home.dishes.title2')}</em>
              </h2>
            </div>
            <Link href="/menu" className="link-ul rv d2">
              {t('home.dishes.link')}
            </Link>
          </div>
          <div className="ds__grid">
            <div className="dc dc--w">
              <img
                src="/images/table-with-many-dishes.jpg"
                alt="Gedekte tafel met meerdere Chinese gerechten bij Asian Glories Rotterdam"
                loading="lazy"
              />
              <div className="dc__ov" />
              <div className="dc__lb">
                <span className="dc__nm">{t('home.dishes.shared.name')}</span>
                <span className="dc__ds">{t('home.dishes.shared.desc')}</span>
              </div>
            </div>
            <div className="dc dc--steam">
              <img
                src="/images/dimsum.jpg"
                alt="Handgemaakte dim sum bij Asian Glories"
                loading="lazy"
              />
              <div className="steam" aria-hidden="true">
                <span className="steam__puff steam__puff--a" />
                <span className="steam__puff steam__puff--b" />
                <span className="steam__puff steam__puff--c" />
              </div>
              <div className="dc__ov" />
              <div className="dc__lb">
                <span className="dc__nm">{t('home.dishes.dimsum.name')}</span>
                <span className="dc__ds">{t('home.dishes.dimsum.desc')}</span>
              </div>
            </div>
            <div className="dc">
              <img
                src="/images/pork-belly.jpg"
                alt="Siu-Yuk, krokant geroosterd buikspek"
                loading="lazy"
              />
              <div className="dc__ov" />
              <div className="dc__lb">
                <span className="dc__nm">{t('home.dishes.siuyuk.name')}</span>
                <span className="dc__ds">{t('home.dishes.siuyuk.desc')}</span>
              </div>
            </div>
            <div className="dc">
              <img
                src="/images/crispy-beef.jpg"
                alt="Crispy beef met sesam en zoetzure saus"
                loading="lazy"
              />
              <div className="dc__ov" />
              <div className="dc__lb">
                <span className="dc__nm">{t('home.dishes.crispybeef.name')}</span>
                <span className="dc__ds">{t('home.dishes.crispybeef.desc')}</span>
              </div>
            </div>
            <div className="dc">
              <img
                src="/images/soup.jpg"
                alt="Sui kau-soep met garnalenravioli"
                loading="lazy"
              />
              <div className="dc__ov" />
              <div className="dc__lb">
                <span className="dc__nm">{t('home.dishes.suikau.name')}</span>
                <span className="dc__ds">{t('home.dishes.suikau.desc')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* MORE ABOUT US: editorial spread — video on the left,
            heading + body + press rotator stacked on the right. */}
        <section className="more">
          <div className="more__inner">
            {/* Left column: vertical video, larger and full-height */}
            <div className="more__media rv">
              <div className="more__video-frame">
                <video autoPlay muted loop playsInline poster="/images/owner-cooking.jpg">
                  <source src="/images/video-general.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Right column: editorial content stack */}
            <div className="more__editorial">
              <p className="lbl rv">{t('home.more.label')}</p>
              <h2 className="rv d1">
                {t('home.more.title1')} <em>{t('home.more.title2')}</em>
              </h2>
              <p className="body-txt rv d2">{t('home.more.body')}</p>
              <Link href="/menu" className="link-ul rv d3">
                {t('home.more.link')}
              </Link>

              {/* Hairline separator between craftsmanship copy and press quotes */}
              <div className="more__rule rv d4">
                <span className="more__rule-label">{t('home.more.divider')}</span>
              </div>

              <PressWall variant="inline" />
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gl">
          <div className="gl__hd">
            <div>
              <p className="lbl rv">{t('home.gallery.label')}</p>
              <h2 className="rv d1">
                {t('home.gallery.title1')}
                <br />
                <em>{t('home.gallery.title2')}</em>
              </h2>
            </div>
            <a
              href="https://www.instagram.com/asianglories010"
              className="gl__ig"
              target="_blank"
              rel="noreferrer"
            >
              @asianglories010 &rarr;
            </a>
          </div>
          <div className="gtrack">
            <div className="gi-item gi-t">
              <img src="/images/girl-inside.jpg" alt="Gast in het restaurant van Asian Glories" loading="lazy" />
            </div>
            <div className="gi-item gi-w">
              <img src="/images/service-inside.jpg" alt="Bediening in Asian Glories Rotterdam" loading="lazy" />
            </div>
            <div className="gi-item gi-s">
              <img src="/images/dim-sum-inside.jpg" alt="Dim sum geserveerd in het restaurant" loading="lazy" />
            </div>
            <div className="gi-item gi-t">
              <img src="/images/terras.jpg" alt="Terras van Asian Glories aan de Westewagenstraat" loading="lazy" />
            </div>
            <div className="gi-item gi-w">
              <img src="/images/terras-service.jpg" alt="Terras met bediening bij Asian Glories" loading="lazy" />
            </div>
            <div className="gi-item gi-s">
              <img src="/images/cocktail.jpg" alt="Cocktail bij Asian Glories" loading="lazy" />
            </div>
            <div className="gi-item gi-t">
              <img src="/images/sfeer.jpg" alt="Sfeer in Asian Glories Rotterdam" loading="lazy" />
            </div>
            <div className="gi-item gi-w">
              <img src="/images/terras-girl.jpg" alt="Gast op het terras van Asian Glories" loading="lazy" />
            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section className="ev" id="evenementen">
          <div className="ev__in">
            <div className="ev__header">
              <p className="lbl rv">{t('home.events.label')}</p>
              <h2 className="rv d1">
                {t('home.events.title1')}
                <br />
                <em>{t('home.events.title2')}</em>
              </h2>
              <a href="mailto:info@asianglories.nl" className="btn-g ev__cta rv d2">
                {t('home.events.cta')}
              </a>
            </div>
            <div className="ev__cards">
              <div className="ev__card rv">
                <div className="ev__card-icon">&#9733;</div>
                <h3 className="ev__card-title">{t('home.events.private.title')}</h3>
                <p className="ev__card-txt">{t('home.events.private.txt')}</p>
                <ul className="ev__card-list">
                  <li>{t('home.events.private.li1')}</li>
                  <li>{t('home.events.private.li2')}</li>
                </ul>
              </div>
              <div className="ev__card rv d2">
                <div className="ev__card-icon">&#9733;</div>
                <h3 className="ev__card-title">{t('home.events.shared.title')}</h3>
                <p className="ev__card-txt">{t('home.events.shared.txt')}</p>
              </div>
              <div className="ev__card rv d3">
                <div className="ev__card-icon">&#9733;</div>
                <h3 className="ev__card-title">{t('home.events.corp.title')}</h3>
                <p className="ev__card-txt">{t('home.events.corp.txt')}</p>
              </div>
            </div>
          </div>
          <div className="ev__img-strip">
            <div className="ev__img">
              <img src="/images/table-with-many-dishes.jpg" alt="Tafel met meerdere gerechten voor shared dining" loading="lazy" />
            </div>
            <div className="ev__img">
              <img src="/images/terras.jpg" alt="Terras van Asian Glories voor evenementen" loading="lazy" />
            </div>
            <div className="ev__img">
              <img src="/images/service-inside.jpg" alt="Bediening tijdens een evenement" loading="lazy" />
            </div>
          </div>
        </section>

        {/* QUOTE PARALLAX — Ken Burns zoom on scroll */}
        <div className="qp">
          <ScrollZoom src="/images/table-with-many-dishes.jpg" alt="" className="qp__zoom" from={1.22} to={1.0} />
          <div className="qp__ov" />
          <div className="qp__c">
            <blockquote>{t('home.quote.text')}</blockquote>
            <cite>{t('home.quote.attr')}</cite>
          </div>
        </div>

        {/* RESERVATION */}
        <section className="res">
          <div className="res__mark rv">
            <img
              src="/images/asian-glories-logo-icon-only.png"
              alt=""
              width={88}
              height={88}
            />
          </div>
          <div className="res__in">
            <div>
              <span className="res__ey">{t('home.reserve.eyebrow')}</span>
              <h2>
                {t('home.reserve.title1')}
                <br />
                <em>{t('home.reserve.title2')}</em>
              </h2>
            </div>
            <a href="#reserveer" onClick={onReserveClick} className="btn-g">
              {t('home.reserve.btn')}
            </a>
          </div>
        </section>

        {/* INFO */}
        <section className="info" id="openingstijden">
          <div className="info__in" id="contact">
            <div>
              <p className="lbl">{t('home.info.hours')}</p>
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
              <p
                className="rv"
                style={{
                  fontSize: 11,
                  fontStyle: 'italic',
                  color: '#9a9a9a',
                  marginTop: 14,
                  letterSpacing: '0.02em',
                }}
              >
                {t('home.info.hours.note')}
              </p>
            </div>
            <div>
              <p className="lbl">{t('home.info.contact')}</p>
              <div className="ct">
                <span className="ct-lb">{t('home.info.address')}</span>
                <a
                  className="ct-v"
                  href="https://maps.google.com/?q=Westewagenstraat+74+Rotterdam"
                  target="_blank"
                  rel="noreferrer"
                >
                  Westewagenstraat 74
                  <br />
                  3011 AT Rotterdam
                </a>
              </div>
              <div className="ct">
                <span className="ct-lb">{t('home.info.phone')}</span>
                <a className="ct-v" href="tel:+31102542071">
                  +31 (0)10 254 20 71
                </a>
              </div>
              <div className="ct">
                <span className="ct-lb">{t('home.info.email')}</span>
                <a className="ct-v" href="mailto:info@asianglories.nl">
                  info@asianglories.nl
                </a>
              </div>
            </div>
            <div>
              <p className="lbl">{t('home.info.follow')}</p>
              <p className="body-txt">{t('home.info.followtxt')}</p>
              <div className="soc">
                <a
                  href="https://www.instagram.com/asianglories010"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  IG
                </a>
                <a
                  href="https://www.facebook.com/asianglories"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  FB
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
