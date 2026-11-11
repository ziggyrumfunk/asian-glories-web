import type { Metadata } from 'next';
import { Marcellus, Pinyon_Script, Spectral } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealScript from '@/components/Reveal';
import './kerst.css';

/* Same typefaces as the printed Kerst menu and the Instagram post. */
const pinyon = Pinyon_Script({ subsets: ['latin'], weight: '400', variable: '--font-pinyon', display: 'swap' });
const marcellus = Marcellus({ subsets: ['latin'], weight: '400', variable: '--font-marcellus', display: 'swap' });
const spectral = Spectral({
  subsets: ['latin'],
  weight: '500',
  style: 'italic',
  variable: '--font-spectral',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kerst Tasting Menu | Asian Glories Rotterdam',
  description:
    'Op 24, 25 en 26 december serveert Asian Glories een kerstverhaal in acht gangen: van zalmsashimi en dim sum tot Pekingeend. 8 gangen €88 p.p., ook in zes of vier gangen.',
  alternates: { canonical: '/kerst' },
  openGraph: {
    title: 'Kerst Tasting Menu | Asian Glories Rotterdam',
    description: 'Een kerstverhaal in acht gangen. 24, 25 en 26 december.',
    images: ['/images/kerst-og.jpg'],
  },
};

const DISHES: [string, string][] = [
  ['Zalmsashimi & koude kipsalade', 'wasabi crumble, soja-citrus, sesam'],
  ['Gestoomde coquille', 'glasnoedels, soja, knoflook'],
  ['Gestoomde oester', 'zwarte bonen'],
  ['Dim sum', 'huisgemaakt, gestoomd en gebakken'],
  ['Hard-zacht', 'garnaal, tofu'],
  ['Pekingeend', 'pannenkoek, prei, komkommer, hoisin'],
  ['Lamskoteletje', 'zwarte peper, paprika'],
  ['Crunchy beef', 'krokante rundreepjes, zoetzure mandarijnsaus'],
];

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Kerst Tasting Menu bij Asian Glories',
  description: 'Een kerstverhaal in acht gangen, ook in zes of vier gangen.',
  startDate: '2026-12-24',
  endDate: '2026-12-26',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Restaurant',
    name: 'Asian Glories',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Westewagenstraat 74',
      addressLocality: 'Rotterdam',
      postalCode: '3011 AT',
      addressCountry: 'NL',
    },
  },
  offers: { '@type': 'Offer', price: '88', priceCurrency: 'EUR', url: 'https://www.asianglories.nl/kerst' },
};

/* Gold double frame with stepped corners, as on the printed menu. */
function SteppedFrame() {
  const corner = (
    <svg viewBox="0 0 25 25" aria-hidden="true">
      <polyline points="24.5,0.5 24.5,12.5 12.5,12.5 12.5,24.5 0.5,24.5" />
    </svg>
  );
  const ring = (cls: string) => (
    <div className={`kf__ring ${cls}`}>
      <span className="kf__edge kf__edge--t" />
      <span className="kf__edge kf__edge--b" />
      <span className="kf__edge kf__edge--l" />
      <span className="kf__edge kf__edge--r" />
      <span className="kf__corner kf__corner--tl">{corner}</span>
      <span className="kf__corner kf__corner--tr">{corner}</span>
      <span className="kf__corner kf__corner--bl">{corner}</span>
      <span className="kf__corner kf__corner--br">{corner}</span>
    </div>
  );
  return (
    <div className="kf" aria-hidden="true">
      {ring('kf__ring--outer')}
      {ring('kf__ring--inner')}
    </div>
  );
}

function Star() {
  return (
    <svg className="k-star" viewBox="-10 -10 20 20" aria-hidden="true">
      <path d="M0,-10 C1.3,-1.3 1.3,-1.3 10,0 C1.3,1.3 1.3,1.3 0,10 C-1.3,1.3 -1.3,1.3 -10,0 C-1.3,-1.3 -1.3,-1.3 0,-10Z" />
    </svg>
  );
}

export default function KerstPage() {
  return (
    <div className={`${pinyon.variable} ${marcellus.variable} ${spectral.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <Nav />
      <RevealScript />

      {/* HERO */}
      <header className="k-hero">
        <div className="k-hero__inner">
          <p className="k-caps k-hero__date rv">24, 25 &amp; 26 december</p>
          <h1 className="k-script k-hero__title rv d1">Kerst</h1>
          <p className="k-caps k-hero__sub rv d2">Tasting menu</p>
          <p className="k-ital k-hero__tag rv d2">Een kerstverhaal in acht gangen</p>
          <div className="k-hero__ctas rv d3">
            <a href="#reserveren" className="k-btn">
              Reserveer uw tafel
            </a>
            <a href="#menu" className="k-ghost">
              Bekijk het menu
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* INTRO */}
        <section className="k-intro">
          <div className="k-intro__inner">
            <p className="k-label rv">Kerst bij Asian Glories</p>
            <p className="k-intro__lead rv d1">
              Op kerstavond, eerste en tweede kerstdag vertellen wij een verhaal in{' '}
              <em>acht gangen</em>.
            </p>
            <p className="k-intro__body rv d2">
              Van zalmsashimi en een gestoomde oester tot huisgemaakte dim sum, Pekingeend met
              pannenkoek en onze crunchy beef: het kerstmenu brengt de klassiekers van onze
              Kantonese keuken samen op één feestelijke avond. Liever een korter verhaal? Het menu
              is ook in zes of vier gangen te bestellen.
            </p>
            <div className="k-facts">
              <div className="k-fact rv">
                <p className="k-fact__k">Wanneer</p>
                <p className="k-fact__v">24, 25 en 26 december</p>
              </div>
              <div className="k-fact rv d1">
                <p className="k-fact__k">Acht gangen</p>
                <p className="k-fact__v">&euro;88 per persoon</p>
              </div>
              <div className="k-fact rv d2">
                <p className="k-fact__k">Korter</p>
                <p className="k-fact__v">6 gangen &euro;78, 4 gangen &euro;68 p.p.</p>
              </div>
              <div className="k-fact rv d3">
                <p className="k-fact__k">Reserveren</p>
                <p className="k-fact__v">Via de reserveringsknop rechtsonder</p>
              </div>
            </div>
          </div>
        </section>

        {/* MENU CARD */}
        <section className="k-menu" id="menu">
          <div className="k-card rv">
            <SteppedFrame />
            <img
              className="k-card__logo"
              src="/images/asian-glories-logo-1x1-square.png"
              alt="Asian Glories"
              width={1080}
              height={1080}
            />
            <h2 className="k-script k-card__title">Kerst</h2>
            <p className="k-caps k-card__sub">Tasting menu</p>
            <p className="k-ital k-card__tag">Een kerstverhaal in acht gangen</p>

            <p className="k-caps k-card__offer">
              8 gangen <Star /> &euro;88 p.p.
            </p>

            <ul className="k-dishes">
              {DISHES.map(([name, desc]) => (
                <li key={name}>
                  <span className="k-caps k-dish__name">{name}</span>
                  <span className="k-ital k-dish__desc">{desc}</span>
                </li>
              ))}
            </ul>

            <div className="k-divider" aria-hidden="true">
              <span />
              <Star />
              <span />
            </div>

            <p className="k-ital k-card__shorter">Liever een korter verhaal?</p>
            <div className="k-options">
              <div>
                <span className="k-caps k-dish__name">6 gangen &middot; &euro;78 p.p.</span>
                <span className="k-ital k-dish__desc">zonder oester en lamskoteletje</span>
              </div>
              <div>
                <span className="k-caps k-dish__name">4 gangen &middot; &euro;68 p.p.</span>
                <span className="k-ital k-dish__desc">ook zonder coquille en hard-zacht</span>
              </div>
            </div>

            <p className="k-ital k-card__note">
              Het dessert is niet inbegrepen.
              <br />
              Allergie&euml;n? Onze gastheer of gastvrouw helpt u graag.
            </p>
          </div>
        </section>

        {/* RESERVEREN */}
        <section className="k-res" id="reserveren">
          <div className="k-res__inner">
            <p className="k-label rv">Reserveren</p>
            <h2 className="k-res__title rv d1">
              Reserveer uw <em>kersttafel</em>
            </h2>
            <p className="k-res__text rv d2">
              Reserveren gaat via de groene reserveringsknop rechtsonder op deze pagina. Kies 24, 25
              of 26 december en uw aantal personen. Het kerstmenu kiest u gewoon aan tafel.
            </p>
            <div className="k-how rv d3">
              <span className="k-how__arrow" aria-hidden="true">
                &#8600;
              </span>
              <div>
                <p className="k-how__label">Gebruik de reserveringsknop rechtsonder</p>
                <p className="k-how__sub">Kies 24, 25 of 26 december</p>
              </div>
            </div>
            <p className="k-res__pdf rv d4">
              <a href="/images/kerstmenu-2026.pdf" target="_blank" rel="noopener">
                Download het kerstmenu (pdf)
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
