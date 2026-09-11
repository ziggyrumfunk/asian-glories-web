import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealScript from '@/components/Reveal';
import './kookcursus.css';

export const metadata: Metadata = {
  title: 'Kookcursus Chinese Keuken | Asian Glories Rotterdam',
  description:
    'Hands-on kookcursus met chef Kevin Fan bij Asian Glories Rotterdam op woensdag 7 oktober. Leer dim sum vouwen en wokken, inclusief proeverij en recepten. €149 per persoon, beperkt aantal plekken.',
  alternates: { canonical: '/kookcursus' },
  openGraph: {
    title: 'Kookcursus Chinese Keuken | Asian Glories Rotterdam',
    description:
      'Leer dim sum vouwen en wokken met chef Kevin Fan op woensdag 7 oktober. Beperkt aantal plekken.',
    images: ['/videos/kookcursus-hero-poster.jpg'],
  },
};

/* Booking runs by email; keep every reserve action on the same address. */
const RESERVE_MAILTO =
  'mailto:info@asianglories.nl?subject=Kookcursus%207%20oktober';
const GIFT_MAILTO = 'mailto:info@asianglories.nl?subject=Kookcursus%20cadeau%20geven';

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Kookcursus Chinese Keuken met Chef Kevin',
  description:
    'Hands-on kookcursus in de Chinese keuken bij Asian Glories Rotterdam: dim sum vouwen en stomen, wokken en een gezamenlijke proeverij, onder leiding van chef Kevin Fan.',
  provider: {
    '@type': 'Restaurant',
    name: 'Asian Glories',
    url: 'https://www.asianglories.nl',
    telephone: '+31102542071',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Westewagenstraat 74',
      addressLocality: 'Rotterdam',
      postalCode: '3011 AT',
      addressCountry: 'NL',
    },
  },
  offers: {
    '@type': 'Offer',
    price: '149',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/LimitedAvailability',
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Onsite',
    startDate: '2026-10-07T16:30:00+02:00',
    endDate: '2026-10-07T20:30:00+02:00',
  },
};

/* Ambient video with a poster fallback: reduced-motion visitors get the
   still image instead (see kookcursus.css). */
function AmbientVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <video
        className="kc-video"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <img className="kc-poster" src={poster} alt="" aria-hidden="true" />
    </div>
  );
}

export default function KookcursusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Nav />
      <RevealScript />

      {/* HERO */}
      <header className="kc-hero">
        <AmbientVideo
          className="kc-hero__media"
          src="/videos/kookcursus-hero.mp4"
          poster="/videos/kookcursus-hero-poster.jpg"
        />
        <div className="kc-hero__ov" />
        <div className="kc-hero__inner">
          <p className="kc-eyebrow rv">Woensdag 7 oktober &middot; Rotterdam</p>
          <h1 className="kc-hero__title rv d1">
            Kookcursus
            <br />
            <em>Chinese keuken</em>
          </h1>
          <p className="kc-hero__sub rv d2">
            Hands-on koken met chef Kevin Fan. Leer dim sum vouwen, sta zelf achter de wok en
            sluit af met een gezamenlijke proeverij van uw eigen gerechten. Het aantal plekken
            is beperkt.
          </p>
          <div className="kc-hero__ctas rv d3">
            <a href={RESERVE_MAILTO} className="kc-btn">
              Reserveer per e-mail
            </a>
            <a href="#programma" className="kc-ghostlink">
              Bekijk het programma
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* INTRO */}
        <section className="kc-intro">
          <div className="kc-intro__inner">
            <p className="kc-label rv">De cursus</p>
            <p className="kc-intro__lead rv d1">
              De basis van de Chinese keuken, geleerd op de plek waar hij elke avond wordt
              gekookt: <em>in onze eigen keuken</em>.
            </p>
            <p className="kc-intro__body rv d2">
              De cursus is geschikt voor zowel individuele deelnemers als groepen. Ervaring is
              niet nodig; enthousiasme wel. U werkt in duo&apos;s of kleine groepjes en gaat naar
              huis met de recepten en met technieken die u thuis direct kunt gebruiken.
            </p>
            <div className="kc-facts">
              <div className="kc-fact rv">
                <p className="kc-fact__k">Wanneer</p>
                <p className="kc-fact__v">
                  Woensdag 7 oktober &middot; inloop 16:00, start 16:30 (circa 4 uur)
                </p>
              </div>
              <div className="kc-fact rv d1">
                <p className="kc-fact__k">Waar</p>
                <p className="kc-fact__v">Asian Glories, Westewagenstraat 74, Rotterdam</p>
              </div>
              <div className="kc-fact rv d2">
                <p className="kc-fact__k">Groepsgrootte</p>
                <p className="kc-fact__v">Maximaal 10 deelnemers per cursus</p>
              </div>
              <div className="kc-fact rv d3">
                <p className="kc-fact__k">Kosten</p>
                <p className="kc-fact__v">&euro;149 per persoon</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMMA */}
        <section className="kc-prog" id="programma">
          <div className="kc-prog__inner">
            <div className="kc-prog__mediacol">
              <div className="kc-prog__sticky rv">
                <AmbientVideo
                  className="kc-frame"
                  src="/videos/kookcursus-dimsum.mp4"
                  poster="/videos/kookcursus-dimsum-poster.jpg"
                />
              </div>
            </div>
            <div>
              <p className="kc-eyebrow rv">Programma van de middag</p>
              <h2 className="kc-prog__title rv d1">
                Van siu mai vouwen
                <br />
                tot <em>wok hei</em>
              </h2>
              <div className="kc-step rv">
                <h3>Welkom &amp; introductie</h3>
                <p>
                  Een korte uitleg over de Chinese keuken, de ingredi&euml;nten en de
                  kooktechnieken van vandaag. Daarna verdelen we de groep in duo&apos;s of kleine
                  groepjes.
                </p>
              </div>
              <div className="kc-step rv">
                <h3>Dim sum maken</h3>
                <p>
                  <strong>Garnalen siu mai met shiitake.</strong> U leert het vouwen en stomen
                  zelf, en natuurlijk wordt er geproefd.
                </p>
              </div>
              <div className="kc-step rv">
                <h3>Achter de wok</h3>
                <p>
                  Drie gerechten uit onze eigen keuken: <strong>charsiew</strong> met
                  huisgemaakte marinade, <strong>gewokte groenten</strong> met
                  shimeji-paddenstoelen en <strong>gebakken rijst</strong> met groenten en ei.
                  Met aandacht voor woktechniek, balans in smaken, mise en place en samenwerking
                  in de keuken.
                </p>
              </div>
              <div className="kc-step rv">
                <h3>Gezamenlijke proeverij</h3>
                <p>
                  We sluiten af aan tafel en genieten samen van de zelfgemaakte gerechten, met
                  ruimte voor vragen en tips van de chef.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="kc-marquee" aria-hidden="true">
          <div className="kc-marquee__track">
            <span>Dim Sum &middot; Wok Hei &middot; Charsiew &middot;</span>
            <span>Dim Sum &middot; Wok Hei &middot; Charsiew &middot;</span>
          </div>
        </div>

        {/* PHOTO BAND */}
        <section className="kc-band">
          <div className="kc-band__grid">
            <div className="kc-band__item rv">
              <img
                src="/images/handmade-dimsum.jpg"
                alt="Handgemaakte dim sum bij Asian Glories"
                loading="lazy"
              />
            </div>
            <div className="kc-band__item rv d1">
              <img
                src="/images/owner-cooking.jpg"
                alt="Chef Kevin Fan achter de wok"
                loading="lazy"
              />
            </div>
            <div className="kc-band__item rv d2">
              <img
                src="/images/table-with-many-dishes.jpg"
                alt="Gedekte tafel met Chinese gerechten"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* INBEGREPEN + PRIJS */}
        <section className="kc-incl">
          <div className="kc-incl__inner">
            <div>
              <p className="kc-label rv">Inbegrepen</p>
              <h2 className="kc-incl__title rv d1">Wat u kunt verwachten</h2>
              <p className="kc-line rv">
                Alle ingredi&euml;nten en de recepten om thuis na te koken
              </p>
              <p className="kc-line rv d1">Proeverij van de zelfgemaakte gerechten</p>
              <p className="kc-line rv d2">Frisdrank tijdens de cursus</p>
              <p className="kc-line rv d3">Schort en keukengerei liggen voor u klaar</p>
            </div>
            <div className="kc-price rv d2">
              <p className="kc-price__amount">&euro;149</p>
              <p className="kc-price__per">per persoon</p>
              <p className="kc-price__note">
                Groepsreserveringen van 10 personen ontvangen 10% korting.
              </p>
              <p className="kc-price__note">
                Huiswijn en bier zijn tijdens de cursus apart bij te bestellen (pin).
              </p>
              <p className="kc-price__fine">
                De cursus gaat door bij minimaal 8 deelnemers. Bij onvoldoende aanmeldingen
                annuleren wij uiterlijk een week van tevoren.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="kc-cta">
          <AmbientVideo
            className="kc-cta__media"
            src="/videos/kookcursus-interieur.mp4"
            poster="/videos/kookcursus-interieur-poster.jpg"
          />
          <div className="kc-cta__ov" />
          <div className="kc-cta__inner">
            <p className="kc-eyebrow rv">Aanmelden</p>
            <h2 className="kc-cta__title rv d1">
              Klaar om zelf achter
              <br />
              <em>de wok</em> te staan?
            </h2>
            <p className="kc-cta__text rv d2">
              Reserveer uw plek door ons een e-mail te sturen met uw naam, het aantal personen
              en eventuele allergie&euml;n. Vol is vol: maximaal 10 plekken per cursus.
            </p>
            <div className="rv d3">
              <a href={RESERVE_MAILTO} className="kc-btn">
                Reserveer per e-mail
              </a>
            </div>
            <p className="kc-cta__alt rv d4">
              Cadeautip: de kookcursus is ook <a href={GIFT_MAILTO}>cadeau te geven</a>. Liever
              persoonlijk contact? Bel <a href="tel:+31641850183">06 41 850 183</a>.
            </p>
            <p className="kc-cta__fine rv d4">
              De cursus gaat door bij minimaal 8 deelnemers; bij onvoldoende aanmeldingen
              annuleren wij uiterlijk een week van tevoren.
            </p>
          </div>
        </section>
      </main>

      {/* Floating reserve tab, pinned to the right edge of the viewport.
          Mid-height, so it never collides with the Zenchef button bottom-right. */}
      <a href={RESERVE_MAILTO} className="kc-float">
        Reserveer nu &middot; beperkte plekken
      </a>

      <Footer />
    </>
  );
}
