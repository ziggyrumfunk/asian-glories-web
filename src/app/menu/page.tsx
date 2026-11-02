import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealScript from '@/components/Reveal';
import MenuTabs from './MenuTabs';
import './menu.css';

export const metadata: Metadata = {
  title: 'Menu | Asian Glories Rotterdam | Kantonees & Sichuan Restaurant',
  description:
    "Bekijk de menukaart van Asian Glories Rotterdam: proeverijmenu's, handgemaakte dim sum en kleine gerechten om te delen, en van vrijdag t/m zondag onze signatuurgerechten. Authentieke Kantonese en Sichuanese keuken.",
  alternates: { canonical: '/menu' },
};

const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Asian Glories Menukaart',
  description: 'Authentieke Kantonese en Sichuanese gerechten in Rotterdam',
  url: 'https://www.asianglories.nl/menu',
  hasMenuSection: [
    { '@type': 'MenuSection', name: 'Asian Tasting Menu' },
    { '@type': 'MenuSection', name: 'First Impressions' },
    { '@type': 'MenuSection', name: 'Dim Sum Collection' },
    { '@type': 'MenuSection', name: 'Warm Dishes' },
    { '@type': 'MenuSection', name: 'Signatuurgerechten om te delen' },
  ],
};

const Tasting = (
  <>
    <div
      className="rv"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2,
        marginBottom: 'clamp(30px,4vw,50px)',
      }}
    >
      <div className="tasting-card">
        <span className="tasting-card__cn">四道</span>
        <span className="tasting-card__name">Asian Tasting, 4 gangen</span>
        <div className="tasting-card__price">
          &euro;58 <span>p.p.</span>
        </div>
      </div>
      <div className="tasting-card">
        <span className="tasting-card__cn">六道</span>
        <span className="tasting-card__name">Asian Tasting, 6 gangen</span>
        <div className="tasting-card__price">
          &euro;68 <span>p.p.</span>
        </div>
      </div>
      <div className="tasting-card">
        <span className="tasting-card__cn">八道</span>
        <span className="tasting-card__name">Asian Tasting, 8 gangen</span>
        <div className="tasting-card__price">
          &euro;78 <span>p.p.</span>
        </div>
      </div>
    </div>
    <p className="tasting-note rv">
      Dim sum | Pekingeend | Zeevruchten en meer
      <br />
      Het dessert is niet inbegrepen.
    </p>
  </>
);

type Dish = {
  name: React.ReactNode;
  cn?: string;
  note?: string;
  price: string;
};

function DishList({ dishes }: { dishes: Dish[] }) {
  return (
    <div className="dish-list rv">
      {dishes.map((d, i) => (
        <div className="dish-row" key={i}>
          <div className="dish-row__info">
            <span className="dish-row__name">{d.name}</span>
            {d.cn ? <span className="dish-row__cn">{d.cn}</span> : null}
            {d.note ? <span className="dish-note">{d.note}</span> : null}
          </div>
          <span className="dish-row__price">{d.price}</span>
        </div>
      ))}
    </div>
  );
}

function CatHeader({ title }: { title: string }) {
  return (
    <div className="cat-header rv">
      <div className="cat-header__line" />
      <h2>{title}</h2>
      <div className="cat-header__line" />
    </div>
  );
}

const AllergyNote = (
  <div className="allergy-note rv">
    <p className="allergy-note__text">
      <strong>Heeft u een allergie?</strong> Laat het ons weten.
    </p>
  </div>
);

/* Small plates: served every day, Monday to Sunday. */
const firstImpressions: Dish[] = [
  { name: 'Tonijn | citrus-soja | wasabi', price: '€ 16,5' },
  { name: 'Rode biet | citrus-soja | wasabi', price: '€ 14,5' },
  { name: 'Sesamkip | zwarte sesam | kippenhuid', price: '€ 10,5' },
  { name: 'Rauwe oester', price: '€ 8,5' },
];

const dimsumCollection: Dish[] = [
  { name: 'Hard-zacht', price: '€ 15,5' },
  { name: 'Rijstflensjes met eend', price: '€ 14,5' },
  { name: '2 gebakken & 2 gestoomd', note: 'Alleen garnaal +€2,5', price: '€ 14' },
  { name: '3 gebakken & 3 gestoomd', note: 'Alleen garnaal +€3,5', price: '€ 19,5' },
  { name: '4 gebakken & 4 gestoomd', note: 'Alleen garnaal +€4,5', price: '€ 24' },
];

const warmDishes: Dish[] = [
  { name: 'Coquille met glasnoedels', price: '€ 15' },
  { name: 'Tijgergarnaal met zwarte bonen', price: '€ 13,5' },
  { name: 'Gestoomde vis', price: '€ 10,5' },
  { name: 'Oester met zwarte bonen', price: '€ 9,5' },
  { name: '5-spice kwartel', price: '€ 15,5' },
  { name: 'Pekingeend', note: '2 stuks', price: '€ 13,5' },
  { name: 'Lamskotelet met zwarte peper', price: '€ 11,5' },
  { name: 'Mcjenny met buikspek', price: '€ 9,5' },
];

/* Signature dishes to share: Friday, Saturday and Sunday only. */
const signatureDishes: Dish[] = [
  {
    name: 'Gebakken tijgergarnalen | zwarte bonen | 5-spice | Sichuanpeper',
    price: '€ 38,5',
  },
  { name: 'Grote garnalen | curry | zoetzuur | pittig', price: '€ 38,5' },
  { name: 'Vis van de dag', price: '€ 37,5 / 39,95' },
  {
    name: 'Canadese kreeft | bosui | gember',
    note: 'Alleen vooraf te bestellen',
    price: '€ 12,50 per 100 gr',
  },
  { name: 'Diamanthaas | zwarte peper | macadamia | sesam', price: '€ 38,5' },
  { name: 'Crunchy beef | sesam | zoetzuur | licht pittig', price: '€ 30' },
  { name: 'Iberico | zoetzuur | ananas', price: '€ 31,5' },
  { name: 'Kip sacha | Chinese barbecuesaus', price: '€ 32,5' },
  { name: 'Char siu | gemarineerd en geroosterd varkensvlees', price: '€ 31' },
  { name: 'Siu-Yuk | krokant geroosterd buikspek', price: '€ 31,5' },
  {
    name: 'Tofu | zwarte bonen & Sichuanpeper | zoetzuur | zout & peper | komijn & chili',
    note: 'Kies uw eigen saus',
    price: '€ 30',
  },
  { name: 'Chinese seizoensgroenten', price: '€ 25,5' },
  { name: 'Gebakken rijst of noodles', price: '€ 5,5' },
];

const SmallPlates = (
  <>
    <p className="tasting-note rv" style={{ marginBottom: 'clamp(40px,5vw,60px)' }}>
      Elke dag geserveerd: kleine gerechten om te delen, zodat u van alles een beetje kunt
      proeven.
    </p>

    <CatHeader title="First Impressions" />
    <DishList dishes={firstImpressions} />

    <CatHeader title="Dim Sum Collection" />
    <DishList dishes={dimsumCollection} />

    <CatHeader title="Warm Dishes" />
    <DishList dishes={warmDishes} />

    <p className="tasting-note rv" style={{ marginTop: 'clamp(40px,5vw,60px)' }}>
      Vraag gerust naar gerechten buiten de kaart om.
    </p>

    {AllergyNote}
  </>
);

const Signature = (
  <>
    <p className="tasting-note rv" style={{ marginBottom: 'clamp(40px,5vw,60px)' }}>
      Alleen op vrijdag, zaterdag en zondag. Onze grote gerechten om te delen, bedoeld als het
      middelpunt van uw tafel, naast de kleine gerechten.
    </p>

    <CatHeader title="Signatuurgerechten om te delen" />
    <DishList dishes={signatureDishes} />

    <p className="tasting-note rv" style={{ marginTop: 'clamp(40px,5vw,60px)' }}>
      Gerechten worden geserveerd zodra ze klaar zijn, zodat u ze op hun best kunt proeven.
    </p>

    {AllergyNote}
  </>
);

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <Nav />
      <RevealScript />

      <header className="menu-hero">
        <div className="menu-hero__bg" />
        <div className="menu-hero__inner">
          <div>
            <h1 className="menu-hero__title rv">
              Menu
              <br />
              <em>kaart</em>
            </h1>
          </div>
          <div className="menu-hero__meta rv d2">
            <p className="menu-hero__note">
              Seizoensgebonden gerechten, bereid met verse ingredi&euml;nten. Het dessert is niet
              inbegrepen, tenzij anders vermeld.
            </p>
            <a
              href="/images/menu-food.pdf"
              target="_blank"
              rel="noopener"
              className="btn-g"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#114032',
                background: '#fced88',
                padding: '15px 32px',
                borderRadius: 1,
              }}
            >
              Download de menukaart (pdf)
            </a>
          </div>
        </div>
      </header>

      <section className="menu-intro">
        <div className="menu-intro__inner">
          <span className="menu-intro__label rv">Over ons</span>
          <p className="menu-intro__text rv d1">
            Asian Glories is een geliefd familierestaurant met Chinese en Rotterdamse wortels. Door
            de jaren heen zijn wij uitgegroeid tot een verfijnd adres voor de Chinese keuken. Al
            bijna dertig jaar verrast ons toegewijde team gasten met de beste
            seizoensingredi&euml;nten. Gastvrijheid en de wil om steeds beter te worden staan
            daarbij voorop.
          </p>
        </div>
      </section>

      <MenuTabs tasting={Tasting} plates={SmallPlates} signature={Signature} />

      <section className="menu-cta-bottom">
        <div className="menu-cta-bottom__inner">
          <span className="menu-cta-bottom__label rv">Ook lekkere wijnen</span>
          <h2 className="rv d1">
            Onze <em>wijnkaart</em>
            <br />
            afgestemd op de keuken
          </h2>
          <div className="menu-cta-bottom__btns rv d2">
            <Link
              href="/wijnkaart"
              className="btn-g"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#114032',
                background: '#fced88',
                padding: '15px 32px',
                borderRadius: 1,
              }}
            >
              Bekijk de wijnkaart
            </Link>
            <a
              href="/images/menu-food.pdf"
              target="_blank"
              rel="noopener"
              className="btn-outline"
            >
              Download de menukaart (pdf)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
