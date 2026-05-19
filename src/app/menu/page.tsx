import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealScript from '@/components/Reveal';
import MenuTabs from './MenuTabs';
import MenuCursor from '@/components/MenuCursor';
import './menu.css';

export const metadata: Metadata = {
  title: 'Menu | Asian Glories Rotterdam | Kantonees & Sichuan Restaurant',
  description:
    "Bekijk de menukaart van Asian Glories Rotterdam. Soepen, voorgerechten, hoofdgerechten en proeverijmenu's. Authentieke Kantonese en Sichuan keuken.",
  alternates: { canonical: '/menu' },
};

const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Asian Glories Menukaart',
  description: 'Authentieke Kantonese en Sichuan gerechten in Rotterdam',
  url: 'https://www.asianglories.nl/menu',
  hasMenuSection: [
    { '@type': 'MenuSection', name: 'Asian Tasting Menu' },
    { '@type': 'MenuSection', name: 'First Impressions' },
    { '@type': 'MenuSection', name: 'Dim Sum Collection' },
    { '@type': 'MenuSection', name: 'Warm Dishes' },
    { '@type': 'MenuSection', name: 'Main Courses' },
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
        marginBottom: 'clamp(40px,6vw,80px)',
      }}
    >
      <div className="tasting-card">
        <span className="tasting-card__cn">四道</span>
        <span className="tasting-card__name">Asian Tasting, 4 Gangen</span>
        <div className="tasting-card__price">
          &euro;58 <span>p.p.</span>
        </div>
        <p className="tasting-card__desc">
          Dim Sum | Peking-eend | Zeevruchten en meer
          <br />
          Het dessert is niet inbegrepen
        </p>
      </div>
      <div className="tasting-card">
        <span className="tasting-card__cn">六道</span>
        <span className="tasting-card__name">Asian Tasting, 6 Gangen</span>
        <div className="tasting-card__price">
          &euro;68 <span>p.p.</span>
        </div>
        <p className="tasting-card__desc">
          Dim Sum | Peking-eend | Zeevruchten en meer
          <br />
          Het dessert is niet inbegrepen
        </p>
      </div>
      <div className="tasting-card">
        <span className="tasting-card__cn">八道</span>
        <span className="tasting-card__name">Asian Tasting, 8 Gangen</span>
        <div className="tasting-card__price">
          &euro;78 <span>p.p.</span>
        </div>
        <p className="tasting-card__desc">
          Dim Sum | Peking-eend | Zeevruchten en meer
          <br />
          Het dessert is niet inbegrepen
        </p>
      </div>
    </div>
  </>
);

type Dish = {
  name: React.ReactNode;
  cn?: string;
  note?: string;
  price: string;
  /** Optional image shown by MenuCursor when this row is hovered (desktop only). */
  image?: string;
};

function DishList({ dishes }: { dishes: Dish[] }) {
  return (
    <div className="dish-list rv">
      {dishes.map((d, i) => (
        <div className="dish-row" key={i} data-img={d.image}>
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

const firstImpressions: Dish[] = [
  { name: 'Tonijn | citrus-soja | wasabi', price: '€ 16,5', image: '/images/dish-tartare.webp' },
  { name: 'Rode-biet | citrus-soja | wasabi', price: '€ 14,5', image: '/images/dish-tartare.webp' },
  { name: 'Sesam kip | zwarte sesam | kippenhuid', price: '€ 10,5', image: '/images/starter.jpg' },
  { name: 'Rauwe oester', price: '€ 8,5', image: '/images/starter.jpg' },
];

// New dim sum structure: one feature item plus three bundle tiers.
const dimsumBundles: Dish[] = [
  { name: 'Hard-zacht', price: '€ 15,5', image: '/images/handmade-dimsum.jpg' },
  {
    name: '2 gebakken & 2 gestoomd',
    note: 'Alleen garnaal +€2,5',
    price: '€ 14',
    image: '/images/dimsum.jpg',
  },
  {
    name: '3 gebakken & 3 gestoomd',
    note: 'Alleen garnaal +€3,5',
    price: '€ 19,5',
    image: '/images/dimsum.jpg',
  },
  {
    name: '4 gebakken & 4 gestoomd',
    note: 'Alleen garnaal +€4,5',
    price: '€ 24',
    image: '/images/dim-sum-inside.jpg',
  },
];

const warmDishes: Dish[] = [
  { name: 'Sui kau-soep', price: '€ 11', image: '/images/soup.jpg' },
  { name: 'Kippen of eenden soep', price: '€ 10,50', image: '/images/soup.jpg' },
  { name: 'Coquille met glasnoedels', price: '€ 15', image: '/images/scallop.jpg' },
  { name: 'Oester met zwarte bonen', price: '€ 9,5', image: '/images/starter.jpg' },
  { name: 'Peking eend', note: '2 stuks', price: '€ 13,5', image: '/images/peking-duck.jpg' },
  {
    name: 'Eend wrap',
    note: 'Supplement: lever +€5,5',
    price: '€ 8,5',
    image: '/images/peking-duck-pancake.webp',
  },
  { name: 'Mcjenny met buikspek', price: '€ 9,5', image: '/images/mcjenny-burger.jpg' },
  { name: 'Lamskotelet met zwarte peper', price: '€ 11,5', image: '/images/main-dish.jpg' },
];

const mainCourses: Dish[] = [
  {
    name: 'Tiger prawns | sichuan pepper | black beans',
    cn: '避风塘炒大虾',
    price: '€ 38,5',
    image: '/images/tiger-prawns.jpg',
  },
  {
    name: 'King prawns | curry sauce',
    cn: '咖喱虾',
    price: '€ 38,5',
    image: '/images/tiger-prawns.jpg',
  },
  {
    name: 'Fish Catch of the Day (steamed or panfried)',
    cn: '蒸/炸鱼',
    price: '€ 37,5 / 39,95',
    image: '/images/main-dish.jpg',
  },
  {
    name: 'Canadian Lobster | spring onion | ginger',
    note: 'Only pre-order',
    price: '€ 12,50/100gr',
    image: '/images/main-dish.jpg',
  },
  {
    name: 'Diamond steak | black pepper | macadamia',
    cn: '夏果黑椒牛柳粒',
    price: '€ 38,5',
    image: '/images/crispy-beef.jpg',
  },
  {
    name: 'Crispy filet steak stripes | mandarin sweet & sour',
    cn: '干牛丝',
    price: '€ 30',
    image: '/images/crispy-beef.jpg',
  },
  {
    name: 'Crispy Spanish Iberico pork | sweet & sour',
    cn: '古老西班牙黑猪',
    price: '€ 31,5',
    image: '/images/pork-belly.jpg',
  },
  {
    name: 'Chicken | barbecue sauce',
    cn: '沙茶鸡',
    price: '€ 31,5',
    image: '/images/main-dish.jpg',
  },
  {
    name: 'Char-Siew | crispy roasted pork belly',
    price: '€ 31',
    image: '/images/pork-belly.jpg',
  },
  {
    name: 'Siu-Yuk | marinated and roasted pork in a sweet and savoury sauce',
    price: '€ 31,50',
    image: '/images/pork-belly.jpg',
  },
  {
    name:
      'Tofu | black beans & sichuan chili | sweet & sour | salt & pepper | cumin & chili',
    note: 'Choose your own sauce',
    price: '€ 30',
    image: '/images/tofu-dish.jpg',
  },
  {
    name: 'Fresh greens | wok vegetables mix',
    cn: '中国青菜',
    price: '€ 25,5',
    image: '/images/nice-stir-fry-pic-topdown.jpg',
  },
  {
    name: 'Fried rice or mie',
    cn: '炒饭面另外加',
    price: '€ 5,5',
    image: '/images/nice-stir-fry-pic-topdown.jpg',
  },
];

const ALaCarte = (
  <>
    {/* First Impressions */}
    <div className="cat-header rv">
      <div className="cat-header__line" />
      <h2>First Impressions</h2>
      <span className="cat-header__cn">初印象</span>
      <div className="cat-header__line" />
    </div>
    <DishList dishes={firstImpressions} />

    {/* Dim Sum Collection */}
    <div className="cat-header rv">
      <div className="cat-header__line" />
      <h2>Dim Sum Collection</h2>
      <span className="cat-header__cn">点心</span>
      <div className="cat-header__line" />
    </div>
    <DishList dishes={dimsumBundles} />

    {/* Warm Dishes */}
    <div className="cat-header rv">
      <div className="cat-header__line" />
      <h2>Warm Dishes</h2>
      <span className="cat-header__cn">热盘</span>
      <div className="cat-header__line" />
    </div>
    <DishList dishes={warmDishes} />

    <p className="tasting-note rv" style={{ marginTop: 'clamp(40px,5vw,60px)' }}>
      Vraag naar eventuele gerechtjes buiten kaart om.
    </p>

    {/* Main Courses */}
    <div className="cat-header rv">
      <div className="cat-header__line" />
      <h2>Main Courses</h2>
      <span className="cat-header__cn">主菜</span>
      <div className="cat-header__line" />
    </div>
    <DishList dishes={mainCourses} />

    <div className="supplement-row rv">
      <strong>Supplement:</strong> Salted Fish &euro;5pp | Prawns &euro;5pp | Beef &euro;4pp |
      Duck &euro;3pp | Chicken &euro;3pp
    </div>

    <div className="allergy-note rv">
      <p className="allergy-note__text">
        <strong>Heeft u een allergie?</strong> Meld het ons!
      </p>
    </div>
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
      <MenuCursor />

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
              Seizoensgebonden gerechten bereid met verse ingredi&euml;nten. Het dessert is niet
              inbegrepen tenzij anders vermeld.
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
              Download PDF menu
            </a>
          </div>
        </div>
      </header>

      <section className="menu-intro">
        <div className="menu-intro__inner">
          <span className="menu-intro__label rv">Over Ons</span>
          <p className="menu-intro__text rv d1">
            Asian Glories is een geliefd familierestaurant met Chinese en Rotterdamse wortels. Door
            de jaren heen zijn wij uitgegroeid tot een verfijnde culinaire bestemming. Al drie
            decennia verrast ons toegewijde team onze gasten met de beste seizoensingredi&euml;nten.
            Met een focus op voortdurende verbetering en gastvrijheid streven wij ernaar u een
            onvergetelijke culinaire ervaring te bieden bij Restaurant Asian Glories.
          </p>
        </div>
      </section>

      <MenuTabs tasting={Tasting} alacarte={ALaCarte} />

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
              Download menukaart PDF
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
