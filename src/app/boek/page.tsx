import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealScript from '@/components/Reveal';
import BookMockupTilt from './BookMockupTilt';
import './boek.css';

export const metadata: Metadata = {
  title: 'Rotterdam Chinatown — Het Boek | Asian Glories',
  description:
    'Rotterdam Chinatown: het culinair erfgoed van Katendrecht en Asian Glories. Geschreven door Ellen Scholtens. Een eerbetoon aan Jenny en Popo. Bestel nu voor €39,95.',
  alternates: { canonical: '/boek' },
  openGraph: {
    title: 'Rotterdam Chinatown — Het Boek | Asian Glories',
    description:
      'Een eerbetoon aan Jenny en Popo. Het verhaal van het eerste Chinatown van Europa en de oprichters van Asian Glories.',
    type: 'website',
    locale: 'nl_NL',
    images: ['/images/902x1200.jpg'],
  },
};

const bookSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'Rotterdam Chinatown',
  subtitle: 'Het culinair erfgoed van Katendrecht en Asian Glories',
  author: { '@type': 'Person', name: 'Ellen Scholtens' },
  isbn: '9789083387956',
  numberOfPages: '256',
  publisher: { '@type': 'Organization', name: 'Kyosei', url: 'https://kyosei.nl' },
  inLanguage: 'nl',
  offers: {
    '@type': 'Offer',
    price: '39.95',
    priceCurrency: 'EUR',
    url: 'https://kyosei.nl/product/rotterdam-chinatown/',
    availability: 'https://schema.org/InStock',
  },
};

export default function BoekPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <Nav />
      <RevealScript />
      <main>
        {/* HERO */}
        <section className="boek-hero">
          <div className="boek-hero__inner">
            <BookMockupTilt>
              <div className="book-wrap">
                <div className="book-mockup" id="bookMockup">
                  <img
                    className="book-mockup__cover"
                    src="/images/902x1200.jpg"
                    alt="Rotterdam Chinatown boekcover"
                    width={340}
                    height={453}
                    loading="eager"
                  />
                  <div className="book-mockup__spine" />
                  <div className="book-mockup__pages" />
                  <div className="book-mockup__gloss" />
                </div>
                <div className="book-badge">
                  <span className="book-badge__price">&euro;39,95</span>
                  <span className="book-badge__label">incl. btw</span>
                </div>
              </div>
            </BookMockupTilt>

            <div>
              <div className="boek-hero__kicker rv">
                <div className="boek-hero__kicker-line" />
                <span>Asian Glories &mdash; Het boek</span>
              </div>
              <h1 className="boek-hero__title rv d1">
                Rotterdam
                <br />
                Chinatown
              </h1>
              <p className="boek-hero__subtitle rv d2">
                Het culinair erfgoed van Katendrecht en Asian Glories
              </p>
              <p className="boek-hero__desc rv d3">
                Het verhaal van het eerste Chinatown van Europa, de opkomst van de Chinese keuken in
                Nederland, en de nalatenschap van Jenny en Popo. Geschreven door culinair journalist
                Ellen Scholtens, samen met chef Kevin Fan.
              </p>
              <div className="boek-hero__actions rv d4">
                <a
                  href="https://kyosei.nl/product/rotterdam-chinatown/"
                  target="_blank"
                  rel="noopener"
                  className="btn-g"
                >
                  Bestel via Kyosei &rarr;
                </a>
                <span className="btn-ghost" style={{ cursor: 'default' }}>
                  Ook verkrijgbaar bij Asian Glories
                </span>
              </div>
              <div className="specs-strip rv d5">
                <div>
                  <span className="spec__label">Taal</span>
                  <span className="spec__val">Nederlands</span>
                </div>
                <div>
                  <span className="spec__label">Pagina&apos;s</span>
                  <span className="spec__val">256</span>
                </div>
                <div>
                  <span className="spec__label">Formaat</span>
                  <span className="spec__val">Hardcover 220&times;280mm</span>
                </div>
                <div>
                  <span className="spec__label">Prijs</span>
                  <span className="spec__val">&euro;39,95</span>
                </div>
                <div>
                  <span className="spec__label">Uitgever</span>
                  <span className="spec__val">Kyosei</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="story">
          <div className="story__inner">
            <div className="collage rv">
              <img
                className="collage__img-a"
                src="/images/chef-kevin-rotterdam-chinatown-book.webp"
                alt="Chef Kevin met het Rotterdam Chinatown boek"
                loading="lazy"
              />
              <img
                className="collage__img-b"
                src="/images/book-cover-angle.webp"
                alt="Rotterdam Chinatown boek vanuit een hoek"
                loading="lazy"
              />
              <img
                className="collage__img-c"
                src="/images/rotterdam-chinatown-open-book.webp"
                alt="Opengeslagen Rotterdam Chinatown boek"
                loading="lazy"
              />
            </div>
            <div>
              <p className="lbl rv">Het verhaal</p>
              <h2 className="rv d1">
                Het eerste Chinatown
                <br />
                van <em>Europa</em>
              </h2>
              <p className="body-txt rv d2">
                Begin vorige eeuw groeide het Rotterdamse schiereiland Katendrecht uit tot het eerste
                Chinatown op het vasteland van Europa. Op de Kaap, zoals de havenwijk in de volksmond
                heet, opende ook het eerste Chinese restaurant van Nederland: Chong Kok Low.
              </p>
              <p className="body-txt rv d3">
                Dit boek duikt in die fascinerende geschiedenis, de komst van Chinese havenarbeiders
                in 1911, de opbouw van een gemeenschap, de culinaire tradities die ze meebrachten.
                En hoe dat alles uiteindelijk leidde tot Asian Glories.
              </p>
              <p className="body-txt rv d4">
                Ook de Chinees-Indisch-Nederlandse keuken wordt belicht, samen met de concepten van
                de nieuwe generatie en de eeuwenoude Chinese keuken met zijn vele tradities en
                rituelen.
              </p>
            </div>
          </div>
        </section>

        {/* TRIBUTE */}
        <section className="tribute">
          <div className="tribute__inner">
            <div>
              <p className="tribute__label rv">Een eerbetoon</p>
              <h2 className="rv d1">
                Jenny &amp; Popo,
                <br />
                <em>nooit vergeten</em>
              </h2>
              <p className="body-txt rv d2">
                Asian Glories werd in 1997 geopend door Jenny Loh en haar man Shun Po Fan, door
                iedereen Popo genoemd. Het echtpaar bouwde een restaurant dat uitgroeide tot een
                culinair ankerpunt in Rotterdam, geliefd bij gasten &eacute;n topkoks.
              </p>
              <p className="body-txt rv d3">
                Op 17 juli 2014 kwamen Jenny en Popo om het leven bij de ramp met vlucht MH17.
                Rotterdam rouwde mee. Duizenden mensen namen afscheid van het echtpaar dat hun stad
                culinair had verrijkt.
              </p>
              <p className="body-txt rv d4">
                Hun zoon Kevin Fan nam de keuken over. Ondanks het onmetelijke verdriet zette hij
                het restaurant voort op het niveau dat zijn ouders hadden neergezet, elk gerecht een
                eerbetoon. In 2024 verhuisde Asian Glories naar de Westewagenstraat.
              </p>
              <p
                className="rv d5"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 17,
                  color: 'rgba(255,255,255,.45)',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  marginTop: 18,
                }}
              >
                &ldquo;Rotterdam Chinatown is een eerbetoon aan Jenny, Popo en de Chinese
                Nederlanders die onze wereld culinair verrijken.&rdquo;
              </p>
            </div>
            <div className="tribute__img-wrap rv d2">
              <div className="tribute__img">
                <img
                  src="/images/jenny-popo.png"
                  alt="Jenny Loh en Popo Fan in de keuken van Asian Glories"
                  loading="lazy"
                />
              </div>
              <p className="tribute__img-caption">
                Jenny Loh &amp; Shun Po Fan (Popo), oprichters van Asian Glories
              </p>
            </div>
          </div>
        </section>

        {/* CHAPTERS */}
        <section className="chapters">
          <div className="chapters__header">
            <span className="chapters__label rv">Wat u leest</span>
            <h2 className="rv d1">
              Zes hoofdstukken,
              <br />
              <em>&eacute;&eacute;n verhaal</em>
            </h2>
          </div>
          <div className="chapters__grid rv">
            <div className="chapter-card">
              <span className="chapter-card__num">01</span>
              <h3>De eerste Chinezen op de Kaap</h3>
              <p>
                Hoe Katendrecht uitgroeide tot het eerste Chinatown op het Europese vasteland en de
                opening van het eerste Chinese restaurant van Nederland.
              </p>
            </div>
            <div className="chapter-card">
              <span className="chapter-card__num">02</span>
              <h3>Vanuit Penang en Hongkong</h3>
              <p>
                Het levensverhaal van Jenny Loh en Popo, hun reis naar Nederland, hun jaren in de
                horeca, en de opening van Asian Glories in 1997.
              </p>
            </div>
            <div className="chapter-card">
              <span className="chapter-card__num">03</span>
              <h3>Bij Jenny eten</h3>
              <p>
                Topkoks en vaste gasten brengen een ode aan Asian Glories. Herinneringen aan Jenny,
                Popo en de gerechten die generaties bleven hangen.
              </p>
            </div>
            <div className="chapter-card">
              <span className="chapter-card__num">04</span>
              <h3>Eeuwenoude culinaire tradities</h3>
              <p>
                Een diepgaand inkijkje in de Chinese keuken, van Kantonees tot Sichuan, van dim sum
                tot Peking eend. De rituelen en technieken van eeuwen.
              </p>
            </div>
            <div className="chapter-card">
              <span className="chapter-card__num">05</span>
              <h3>Nederland verchineest</h3>
              <p>
                De evolutie van de Chinese keuken in Nederland. De Chinees-Indisch-Nederlandse fusie
                en de nieuwe generatie restaurateurs.
              </p>
            </div>
            <div className="chapter-card">
              <span className="chapter-card__num">06</span>
              <h3>Kevin, Helena &amp; de toekomst</h3>
              <p>
                Een intiem gesprek met Kevin en zijn vrouw Helena. Hoe zij het verhaal van Asian
                Glories verder schrijven met liefde voor het verleden.
              </p>
            </div>
          </div>
        </section>

        {/* AUTHOR */}
        <section className="author">
          <div className="author__inner">
            <span className="author__label rv">De auteur</span>
            <blockquote className="author__quote rv d1">
              &ldquo;Toen Kevin mij vroeg of ik een eerbetoon aan zijn ouders wilde schrijven, was
              ik <em>heel gelukkig</em>&rdquo;
            </blockquote>
            <div className="author__divider rv d2" />
            <p className="author__name rv d2">Ellen Scholtens</p>
            <p className="author__bio rv d3">
              Culinair journalist en schrijver. Ellen kende Jenny en Popo al sinds de openingsdag
              van Asian Glories in 1997. In <em>Rotterdam Chinatown</em> weeft zij hun persoonlijke
              verhaal samen met de rijke geschiedenis van de Chinese gemeenschap in Rotterdam,
              onderbouwd met archieffoto&apos;s en getuigenissen. Gerealiseerd samen met chef Kevin
              Fan en mogelijk gemaakt door{' '}
              <a
                href="https://droomendaad.nl"
                target="_blank"
                rel="noopener"
                style={{ color: '#114032', borderBottom: '1px solid #ece5d8' }}
              >
                Droomendaad
              </a>
              .
            </p>
          </div>
        </section>

        {/* PHOTO STRIP */}
        <section className="photos">
          <div className="photos__grid">
            <div className="photos__item">
              <img src="/images/902x1200.jpg" alt="Rotterdam Chinatown boekcover" loading="lazy" />
            </div>
            <div className="photos__item">
              <img
                src="/images/chef-kevin-rotterdam-chinatown-book.webp"
                alt="Chef Kevin met het boek"
                loading="lazy"
              />
            </div>
            <div className="photos__item">
              <img
                src="/images/rotterdam-chinatown-open-book.webp"
                alt="Opengeslagen boek"
                loading="lazy"
              />
            </div>
            <div className="photos__item">
              <img src="/images/jenny-popo.png" alt="Jenny en Popo in de keuken" loading="lazy" />
            </div>
          </div>
        </section>

        {/* BUY */}
        <section className="buy">
          <div className="buy__inner">
            <span className="buy__label rv">Bestel het boek</span>
            <h2 className="rv d1">
              Het perfecte
              <br />
              <em>cadeau</em>
            </h2>
            <p className="buy__sub rv d2">
              Voor iedereen die houdt van Rotterdam, Chinese cultuur of gewoon een mooi verhaal.
              Hardcover, 256 pagina&apos;s, rijkelijk ge&iuml;llustreerd.
            </p>
            <div className="buy__options rv d2">
              <div className="buy-card">
                <span className="buy-card__label">Online bestellen</span>
                <span className="buy-card__name">Via Kyosei</span>
                <span className="buy-card__note">Bezorging in heel Nederland</span>
              </div>
              <div className="buy-card">
                <span className="buy-card__label">Persoonlijk ophalen</span>
                <span className="buy-card__name">Bij Asian Glories</span>
                <span className="buy-card__note">Westewagenstraat 74, Rotterdam</span>
              </div>
            </div>
            <div className="buy__price rv d3">
              &euro;39,95<span>incl. btw</span>
            </div>
            <div className="buy__btns rv d4">
              <a
                href="https://kyosei.nl/product/rotterdam-chinatown/"
                target="_blank"
                rel="noopener"
                className="btn-g"
              >
                Bestel via Kyosei &rarr;
              </a>
              <a
                href="/menu"
                className="btn-ghost"
                style={{ color: 'rgba(255,255,255,.6)', borderBottomColor: 'rgba(255,255,255,.2)' }}
              >
                Bekijk de menukaart
              </a>
            </div>
            <p className="buy__note rv d5">
              ISBN 978-90-833879-5-6 &middot; Uitgegeven door Kyosei &middot; Geschreven door Ellen
              Scholtens
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
