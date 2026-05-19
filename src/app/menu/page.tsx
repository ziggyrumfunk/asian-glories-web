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
};

function DishList({ dishes }: { dishes: Dish[] }) {
  return (
    <div className="dish-list rv">
      {dishes.map((d, i) => (
        <div className="dish-row" key={i}>
          <div className="dish-row__info">
            <span className="dish-row__name">{d.name}</span>
            {d.cn ? <span className="dish-row__cn">{d.cn}</span> : null}
            {d.note ? <span className="dish-note">{d.note}</