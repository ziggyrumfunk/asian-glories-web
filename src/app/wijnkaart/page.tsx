import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealScript from '@/components/Reveal';
import './wijnkaart.css';

export const metadata: Metadata = {
  title: 'Wijnkaart | Asian Glories Rotterdam',
  description:
    'Onze wijnkaart: zorgvuldig geselecteerde wijnen die de Kantonese en Sichuan keuken complementeren.',
  alternates: { canonical: '/wijnkaart' },
};

type Price = { glass?: string; bottle?: string };
type Stack = { amount: string; ml: string }[];

type Wine = {
  name: React.ReactNode;
  desc?: string;
  // single-price modes
  price?: Price;
  // stacked-price mode (multiple bottle sizes)
  stack?: Stack;
  glass?: string;
};

function ColHead({ single = false }: { single?: boolean }) {
  return (
    <div className={`col-head rv ${single ? 'col-head--single' : ''}`}>
      <span className="col-head__name">Wijn</span>
      {!single && <span>Glas</span>}
      <span>Fles</span>
    </div>
  );
}

function WineRow({ wine, single = false }: { wine: Wine; single?: boolean }) {
  return (
    <div className={`wine-row ${single ? 'wine-row--single' : ''}`}>
      <div className="wine-row__info">
        <div className="wine-row__name">{wine.name}</div>
        {wine.desc ? <p className="wine-row__desc">{wine.desc}</p> : null}
      </div>
      {!single && <span className="wine-row__price">{wine.glass ?? ''}</span>}
      {wine.stack ? (
        <div className="wine-row__price-stack">
          {wine.stack.map((s, i) => (
            <span key={i}>
              {s.amount} <span className="ml">{s.ml}</span>
            </span>
          ))}
        </div>
      ) : (
        <span className="wine-row__price">{wine.price?.bottle ?? ''}</span>
      )}
    </div>
  );
}

// --- BUBBELS ---
const bubbels: Wine[] = [
  {
    name: (
      <>
        <strong>Cava</strong> <em>| Glas |</em> dArciac Selecci&oacute; Brut
      </>
    ),
    glass: '€ 7,5',
    stack: [{ amount: '€ 40,5', ml: '750ML' }],
  },
  {
    name: (
      <>
        <strong>Laurent-Perrier, Ultra-Brut,</strong> Champagne
      </>
    ),
    stack: [{ amount: '€ 145', ml: '750ML' }],
  },
  {
    name: (
      <>
        <strong>Laurent-Perrier, Cuv&eacute;e-Brut,</strong> Champagne
      </>
    ),
    stack: [
      { amount: '€ 81,5', ml: '375ML' },
      { amount: '€ 110', ml: '750ML' },
    ],
  },
  {
    name: (
      <>
        <strong>Baron de Rothschild, Concordia,</strong> Champagne, Brut
      </>
    ),
    stack: [{ amount: '€ 235', ml: '1500ML' }],
  },
  {
    name: (
      <>
        <strong>Delot P&egrave;re en Fils,</strong> Champagne, Blanc de Noir Reserve
      </>
    ),
    stack: [
      { amount: '€ 60', ml: '375ML' },
      { amount: '€ 78,5', ml: '750ML' },
    ],
  },
  {
    name: (
      <>
        <strong>Apostelhoeve Cuv&eacute;e XII Brut,</strong> Maastricht, Nederland
      </>
    ),
    stack: [{ amount: '€ 83,5', ml: '750ML' }],
  },
  {
    name: (
      <>
        <strong>Prosecco Millesimato Bio,</strong> Corvezzo, Itali&euml;
      </>
    ),
    stack: [{ amount: '€ 42', ml: '750ML' }],
  },
  {
    name: (
      <>
        <strong>Sparkling Tea Lyser&oslash;d,</strong> Denemarken <em>(Alcoholvrij)</em>
      </>
    ),
    desc:
      'Een droge, mousserende wijn met tonen van rode bessen, munt en hibiscus bloem.',
    stack: [{ amount: '€ 69', ml: '750ML' }],
  },
  {
    name: (
      <>
        <strong>Sparkling Tea Gr&oslash;n,</strong> Denemarken <em>(Alcoholvrij)</em>
      </>
    ),
    desc:
      'Gebaseerd op groene thee met duidelijke citrustonen die goed passen bij Aziatische gerechten.',
    stack: [{ amount: '€ 69', ml: '750ML' }],
  },
];

// --- HUISWIJNEN ---
const huisWit: Wine[] = [
  {
    name: (
      <>
        <strong>Chenin Blanc,</strong> Simonsig Stellenbosch, Zuid-Afrika
      </>
    ),
    glass: '€ 8,5',
    price: { bottle: '€ 44,5' },
  },
  {
    name: (
      <>
        <strong>Viognier, Dumanet,</strong> Frankrijk
      </>
    ),
    glass: '€ 8',
    price: { bottle: '€ 42' },
  },
  {
    name: (
      <>
        <strong>Chardonnay,</strong> Les Bertholets, Languedoc, Frankrijk
      </>
    ),
    glass: '€ 7,5',
    price: { bottle: '€ 40' },
  },
  {
    name: (
      <>
        <strong>Sauvignon Blanc,</strong> Analivia, Spanje
      </>
    ),
    glass: '€ 7',
    price: { bottle: '€ 37,5' },
  },
  {
    name: (
      <>
        <strong>Pinot Grigio,</strong> Decanal, Veneti&euml;, Itali&euml;
      </>
    ),
    glass: '€ 6',
    price: { bottle: '€ 35' },
  },
  {
    name: (
      <>
        <strong>Nahe, Von der Leyen,</strong> Duitsland
      </>
    ),
    glass: '€ 6',
    price: { bottle: '€ 34' },
  },
];

const huisRood: Wine[] = [
  {
    name: (
      <>
        <strong>La Planta,</strong> Tempranillo, Bodegas Arzuaga, Spanje
      </>
    ),
    glass: '€ 10',
    price: { bottle: '€ 49' },
  },
  {
    name: (
      <>
        <strong>Pinot Noir Selection,</strong> Nittnaus, Oostenrijk
      </>
    ),
    glass: '€ 10',
    price: { bottle: '€ 49' },
  },
  {
    name: (
      <>
        <strong>Leyda Reserva,</strong> Carmen&eacute;re, Central Valley, Chili
      </>
    ),
    glass: '€ 8,5',
    price: { bottle: '€ 44' },
  },
  {
    name: (
      <>
        <strong>Primitivo,</strong> Appassimento, Passo del Sud, Puglia, Itali&euml;
      </>
    ),
    glass: '€ 8',
    price: { bottle: '€ 42' },
  },
  {
    name: (
      <>
        <strong>Terre di Marca,</strong> Merlot Bio, Corvezzo, Itali&euml;
      </>
    ),
    glass: '€ 6,5',
    price: { bottle: '€ 36' },
  },
];

const huisRose: Wine[] = [
  {
    name: (
      <>
        <strong>Domaine Haut Gl&eacute;on,</strong> Vall&eacute;e Du Paradis, Languedoc-Roussillon
      </>
    ),
    glass: '€ 10,5',
    price: { bottle: '€ 58,5' },
  },
  {
    name: (
      <>
        <strong>Greg &amp; Juju Ros&eacute;,</strong> Domaine Robert Vic, Frankrijk
      </>
    ),
    glass: '€ 8',
    price: { bottle: '€ 41,5' },
  },
];

// --- WITTE WIJNEN ---
const witteWijnen: Wine[] = [
  {
    name: (
      <>
        <strong>Rijks Chenin Blanc Governors Reserve,</strong> Zuid-Afrika <em>2020</em>
      </>
    ),
    desc:
      "De Governor's Reserve Chenin Blanc uit Zuid-Afrika is een volle en elegante wijn met tonen van rijp geel fruit, subtiele houtinvloed en een lange, verfijnde afdronk.",
    price: { bottle: '€ 170' },
  },
  {
    name: (
      <>
        <strong>Baron de L, Baron de Ladoucette,</strong> Pouilly Fum&eacute;, Loire, Frankrijk <em>2022</em>
      </>
    ),
    desc:
      'Baron de L. wordt beschouwd als een van de beste wijnen van de Sauvignon Blanc-druif ter wereld. Beste Pouilly fume die er is.',
    stack: [
      { amount: '€ 155', ml: '750ML' },
      { amount: '€ 280', ml: '1,5L' },
    ],
  },
  {
    name: (
      <>
        <strong>Meursault, Louis Jadot,</strong> Beaune, Frankrijk <em>2023</em>
      </>
    ),
    desc:
      'Floraal en boterig aroma met hints van honing en ceder, rijp wit fruit, perzik, abrikoos, specerijen en hazelnoot.',
    price: { bottle: '€ 150' },
  },
  {
    name: (
      <>
        <strong>As Sortes, Godello,</strong> R. Palacio, Rioja, Spanje <em>2023</em>
      </>
    ),
    desc:
      'Behoort tot de top in Spaans wit, met een complexe, smaakopwekkende geur en een intrigerende ziltigheid in de smaak.',
    price: { bottle: '€ 125' },
  },
  {
    name: (
      <>
        <strong>Bourgogne, Clos Du Chateau,</strong> Chateau Meursault, Frankrijk <em>2021</em>
      </>
    ),
    desc:
      'De neus is expressief met citrustonen. De smaak is fris en genereus met mooie fijne houttonen die lengte brengen in de mond.',
    price: { bottle: '€ 115' },
  },
  {
    name: (
      <>
        <strong>Pouilly Fuiss&eacute;, Domaine Ferret,</strong> Bourgogne, Frankrijk <em>2023</em>
      </>
    ),
    desc: 'Jong, fris, mooie bitters, zachte zuren, groenig kruidig elegant.',
    price: { bottle: '€ 105' },
  },
  {
    name: (
      <>
        <strong>Chablis Grand Regnard,</strong> AOC, Chablis, Frankrijk <em>2024</em>
      </>
    ),
    desc:
      'Er zijn slechts 7 Grand Cru-wijngaarden in heel Chablis; Regnard is de enige wijnmakerij die wijngaarden heeft in alle 7.',
    stack: [
      { amount: '€ 70,5', ml: '375ML' },
      { amount: '€ 100', ml: '750ML' },
      { amount: '€ 160', ml: '1,5L' },
    ],
  },
  {
    name: (
      <>
        <strong>Sancerre, Grande Cuv&eacute;e,</strong> Balland, Frankrijk <em>2023</em>
      </>
    ),
    desc: 'Intense sauvignon blanc met exotisch fruit, zuiver en fris.',
    price: { bottle: '€ 82' },
  },
  {
    name: (
      <>
        <strong>Gr&uuml;ner Veltliner,</strong> Schloss Gobelsburg, Kamptal, Oostenrijk <em>2024</em>
      </>
    ),
    desc: 'Een zeer culinaire wijn met verfijnde zuren en een mooie smaak.',
    price: { bottle: '€ 71,5' },
  },
  {
    name: (
      <>
        <strong>Chablis, Hamelin,</strong> Bourgogne, Frankrijk <em>2024</em>
      </>
    ),
    desc: 'Frisheid en soepele, milde smaak. Echte Chablis.',
    price: { bottle: '€ 70' },
  },
  {
    name: (
      <>
        <strong>Apostelhoeve Cuv&eacute;e XII,</strong> Hulst, Maastricht, Nederland <em>2025</em>
      </>
    ),
    desc: 'Zacht en zuiver met frisse zuren, mineraal, iets amandel.',
    price: { bottle: '€ 68,5' },
  },
  {
    name: (
      <>
        <strong>Rijk&apos;s Chenin Blanc, Private Cellar,</strong> Barrel Fermented, Zuid-Afrika <em>2024</em>
      </>
    ),
    desc:
      "Een goudgele Chenin met ananas en abrikoosaroma's, mooi geintegreerd hout, en een lange afdronk.",
    price: { bottle: '€ 67,5' },
  },
  {
    name: (
      <>
        <strong>Chardonnay, Saint-V&eacute;ran Vieilles Vignes,</strong> Bourgogne <em>2021</em>
      </>
    ),
    desc:
      'Mooie, complexe chardonnay met een goede balans, finesse, rijkheid en kracht. Fijne tonen van noten en zacht tropisch fruit.',
    price: { bottle: '€ 67' },
  },
  {
    name: (
      <>
        <strong>Albari&ntilde;o &Aacute;mbar,</strong> Granbaz&aacute;n, Spanje <em>2024</em>
      </>
    ),
    desc: 'Vol en elegant met een zuivere, langdurige afdronk.',
    price: { bottle: '€ 62,5' },
  },
  {
    name: (
      <>
        <strong>Riesling, Domaine Schoffit,</strong> Elzas, Frankrijk <em>2024</em>
      </>
    ),
    desc: 'Elzasser specialiteit, krachtig vol en delicaat van smaak.',
    price: { bottle: '€ 54,5' },
  },
  {
    name: (
      <>
        <strong>Chardonnay, M&acirc;con-P&eacute;ronne Vieilles Vignes</strong> <em>2023</em>
      </>
    ),
    desc:
      'Zeer geurig bouquet met tonen van perzik en rijpe peer, wat bloemen en klein botertje. Volle chardonnay, gezond fris fruit met een droge, lange afdronk.',
    price: { bottle: '€ 54' },
  },
  {
    name: (
      <>
        <strong>Scaia, Garganega en Chardonnay,</strong> Veneto, Itali&euml; <em>2025</em>
      </>
    ),
    desc: 'Zachtfris en goed gebalanceerd.',
    price: { bottle: '€ 53,5' },
  },
  {
    name: (
      <>
        <strong>H&aacute;H&aacute;, Sauvignon Blanc,</strong> Marlborough, Nieuw-Zeeland <em>2022</em>
      </>
    ),
    desc:
      'Stuivend geur, fris en droog met mango, limoen, passievrucht en een rijke smaak.',
    price: { bottle: '€ 52,5' },
  },
  {
    name: (
      <>
        <strong>Weissburgunder,</strong> Weingut Georg Mosbacher, Duitsland <em>2024</em>
      </>
    ),
    desc: 'Volle frisse Pinot Blanc met een mooi spel van zoet en zuur.',
    price: { bottle: '€ 50' },
  },
];

// --- RODE WIJNEN ---
const rodeWijnen: Wine[] = [
  {
    name: (
      <>
        <strong>Ch&acirc;teau Palmer Alter Ego De Palmer,</strong> Margaux, Frankrijk <em>2019</em>
      </>
    ),
    desc:
      'Na zorgvuldige selectie en 18-24 maanden houtlagering ontstaat een elegante wijn met zacht fruitig parfum en nobele houttonen.',
    price: { bottle: '€ 225' },
  },
  {
    name: (
      <>
        <strong>Rijks Pinotage Governors Reserve,</strong> Zuid-Afrika <em>2016</em>
      </>
    ),
    desc:
      "De Governor's Reserve Pinotage is een krachtige rode wijn met tonen van donker fruit, subtiele kruidigheid en een lange, elegante afdronk.",
    price: { bottle: '€ 225' },
  },
  {
    name: (
      <>
        <strong>Gaja Barolo Dagromis,</strong> Itali&euml; <em>2021</em>
      </>
    ),
    desc:
      'Krachtige Barolo Dagromis met rode bes, cassis, tabak, mineralen en eikenhout. Florale tonen, drop, specerijen.',
    price: { bottle: '€ 185' },
  },
  {
    name: (
      <>
        <strong>Gaja Brunello di Montalcino,</strong> Pieve Santa Restituta, Itali&euml; <em>2020</em>
      </>
    ),
    desc:
      'Een elegante Brunello met een mondvullende rijpe structuur, zwoele tannines, confiture, kruidige houttonen en romige tonen.',
    price: { bottle: '€ 160' },
  },
  {
    name: (
      <>
        <strong>Marsannay Clos De Jeu,</strong> Ch&acirc;teau Marsannay, Frankrijk <em>2022</em>
      </>
    ),
    desc:
      'De neus onthult finesse met licht geroosterde, fruitige tonen. In de mond soepel en mooi gestructureerd met zijdezachte tannines.',
    price: { bottle: '€ 115' },
  },
  {
    name: (
      <>
        <strong>Pommard &apos;Tavannes&apos;,</strong> Fernand et Laurent Pillot, Frankrijk <em>2022</em>
      </>
    ),
    desc:
      'Helderrood van kleur. Royaal rood fruit, kers en wat bes in geur en smaak. Volle pinot noir, mooi ondersteund door houtlagering.',
    price: { bottle: '€ 115' },
  },
  {
    name: (
      <>
        <strong>Beaune-Gr&egrave;ves, Bourgogne,</strong> Thomas Morey, Frankrijk <em>2021</em>
      </>
    ),
    desc: 'Elegant rood fruit, fluweelzacht en subtiel hout, pure Bourgogne klasse.',
    price: { bottle: '€ 105' },
  },
  {
    name: (
      <>
        <strong>Amarone della Valpolicella Tommasi,</strong> Itali&euml; <em>2021</em>
      </>
    ),
    desc:
      "Een van de bekendste Amarone's gemaakt van ingedroogde druiven en dat geeft een smaak!",
    stack: [
      { amount: '€ 76,5', ml: '375ML' },
      { amount: '€ 100', ml: '750ML' },
      { amount: '€ 160', ml: '1,5L' },
    ],
  },
  {
    name: (
      <>
        <strong>Ch&acirc;teau Cantenac Brown Brio,</strong> Margaux, Frankrijk <em>2019</em>
      </>
    ),
    desc:
      'Prachtige Troisieme Grand Cru Classe du Medoc. Bijna paarszwarte kleur, kruidige neus met zwart fruit en bessen.',
    price: { bottle: '€ 96,5' },
  },
  {
    name: (
      <>
        <strong>Santenay &apos;Les H&acirc;tes&apos;, Rouge,</strong> Domaine Vincent et Sophie Morey <em>2022</em>
      </>
    ),
    desc:
      'Iets gebroken rood, zuivere geur van klein rood fruit. In de mond een volle aanzet, soepel met wat aardse tonen.',
    price: { bottle: '€ 89,5' },
  },
  {
    name: (
      <>
        <strong>Morgenster, Laurens River Valley,</strong> Stellenbosch, Zuid-Afrika <em>2019</em>
      </>
    ),
    desc:
      "Aroma's van zwarte kers, cassis, geroosterd brood en ceder, met een volle smaak van rijpe vruchten en een subtiele vanille en houttoets.",
    price: { bottle: '€ 71' },
  },
  {
    name: (
      <>
        <strong>Rioja Muga Reserva,</strong> Spanje <em>2021</em>
      </>
    ),
    desc:
      'Kastanjebruin van kleur. Rijk aroma van fruit en vanille. Complex, zachte tannines, lichte tabak, gekonfijt fruit en ceder.',
    price: { bottle: '€ 70' },
  },
  {
    name: (
      <>
        <strong>Baron de Ley,</strong> Rioja Reserva, Spanje <em>2021</em>
      </>
    ),
    desc:
      "Krachtige, romige wijn met rijpe tannines en aroma's van bosvruchten, ceder en chocola.",
    price: { bottle: '€ 60' },
  },
  {
    name: (
      <>
        <strong>Montepulciano d&apos;Abruzzo,</strong> Capo Le Vigne, Vigne Madre, Itali&euml; <em>2019</em>
      </>
    ),
    desc:
      "Diep paarse wijn met aroma's van donker fruit, wilde kersen, koffie en cacao, met een rijke, volle smaak.",
    price: { bottle: '€ 59,5' },
  },
  {
    name: (
      <>
        <strong>Rijks Pinotage, Touch of Oak,</strong> Zuid-Afrika <em>2023</em>
      </>
    ),
    desc:
      "Rijk's behoort tot de top van Zuid-Afrika en wordt ook wel de koning van de twee 'eigen' druivenrassen genoemd.",
    price: { bottle: '€ 58' },
  },
  {
    name: (
      <>
        <strong>Chianti Classico, Querciabella,</strong> Toscana, Itali&euml; <em>2021</em>
      </>
    ),
    desc:
      '"I ate his liver with some fava beans and a nice Chianti..." — Hannibal Lecter',
    price: { bottle: '€ 56,5' },
  },
  {
    name: (
      <>
        <strong>&quot;Shotfire&quot; Shiraz,</strong> Barossa, Australi&euml; <em>2019</em>
      </>
    ),
    desc: 'Mooi in balans met frisse zuren, veel kracht en lange afdronk.',
    price: { bottle: '€ 56' },
  },
];

// --- ROSE WIJNEN ---
const roseWijnen: Wine[] = [
  {
    name: (
      <>
        <strong>Whispering Angel,</strong> Caves D&apos;Esclans, C&ocirc;tes De Provence, Frankrijk
      </>
    ),
    desc:
      'Een elegante en verfijnde rose uit de Provence, bekend om zijn frisse karakter en zachte fruittonen van aardbei, perzik en citrus.',
    price: { bottle: '€ 68' },
  },
  {
    name: (
      <>
        <strong>Sancerre Ros&eacute;, Delaporte,</strong> Chavignol, Frankrijk <em>2022</em>
      </>
    ),
    desc:
      "Een verfijnde rose uit de Loire, gemaakt van Pinot Noir, met aroma's van framboos en kers.",
    price: { bottle: '€ 79' },
  },
  {
    name: (
      <>
        <strong>Domaines Ott Ch&acirc;teau de Selle Ros&eacute;,</strong> Frankrijk <em>2023</em>
      </>
    ),
    desc:
      'Een verfijnde en elegante Provence rose met tonen van witte perzik, citrus en bloemen.',
    price: { bottle: '€ 98' },
  },
];

export default function WijnkaartPage() {
  return (
    <>
      <Nav />
      <RevealScript />

      <header className="wine-hero">
        <div className="wine-hero__bg" />
        <div className="wine-hero__inner">
          <div>
            <h1 className="wine-hero__title rv">
              Wijn
              <br />
              <em>kaart</em>
            </h1>
          </div>
          <div className="wine-hero__meta rv d2">
            <p className="wine-hero__quote">
              &ldquo;Rice is born in water and must die in wine&hellip;&rdquo;
            </p>
            <span className="wine-hero__attr">&mdash; Asian Glories</span>
          </div>
        </div>
      </header>

      <nav className="section-nav" aria-label="Wijnkaart secties">
        <div className="section-nav__inner">
          <a href="#bubbels">Bubbels</a>
          <a href="#huiswijnen">Huiswijnen</a>
          <a href="#wit">Witte Wijnen</a>
          <a href="#rood">Rode Wijnen</a>
          <a href="#rose">Ros&eacute; Wijnen</a>
        </div>
      </nav>

      <main className="wine-body">
        {/* BUBBELS */}
        <div className="wine-cat-header rv" id="bubbels">
          <div className="wine-cat-header__line" />
          <h2>Bubbels</h2>
          <span className="wine-cat-header__cn">气泡酒</span>
          <div className="wine-cat-header__line" />
        </div>
        <ColHead />
        <div className="wine-list rv">
          {bubbels.map((w, i) => (
            <WineRow key={i} wine={w} />
          ))}
        </div>
        <div className="wine-quote rv">
          <p className="wine-quote__text">
            Too much of anything is bad, but too much Champagne is just right.
          </p>
          <span className="wine-quote__attr">&mdash; F. Scott Fitzgerald</span>
        </div>

        {/* HUISWIJNEN */}
        <div className="wine-cat-header rv" id="huiswijnen">
          <div className="wine-cat-header__line" />
          <h2>Huiswijnen</h2>
          <span className="wine-cat-header__cn">家酒</span>
          <div className="wine-cat-header__line" />
        </div>

        <div className="wine-sub-header rv">
          <h3>Wit Huiswijnen</h3>
        </div>
        <ColHead />
        <div className="wine-list rv">
          {huisWit.map((w, i) => (
            <WineRow key={i} wine={w} />
          ))}
        </div>

        <div className="wine-sub-header rv">
          <h3>Rode Huiswijnen</h3>
        </div>
        <ColHead />
        <div className="wine-list rv">
          {huisRood.map((w, i) => (
            <WineRow key={i} wine={w} />
          ))}
        </div>

        <div className="wine-sub-header rv">
          <h3>Ros&eacute; Huiswijn</h3>
        </div>
        <ColHead />
        <div className="wine-list rv">
          {huisRose.map((w, i) => (
            <WineRow key={i} wine={w} />
          ))}
        </div>

        {/* WITTE WIJNEN */}
        <div className="wine-cat-header rv" id="wit">
          <div className="wine-cat-header__line" />
          <h2>Witte Wijnen</h2>
          <span className="wine-cat-header__cn">白葡萄酒</span>
          <div className="wine-cat-header__line" />
        </div>
        <ColHead single />
        <div className="wine-list rv">
          {witteWijnen.map((w, i) => (
            <WineRow key={i} wine={w} single />
          ))}
        </div>

        <div className="wine-quote rv">
          <p className="wine-quote__text">
            Age is just a number. It&apos;s totally irrelevant unless, of course, you happen to be a
            bottle of wine.
          </p>
          <span className="wine-quote__attr">&mdash; Joan Collins</span>
        </div>

        {/* RODE WIJNEN */}
        <div className="wine-cat-header rv" id="rood">
          <div className="wine-cat-header__line" />
          <h2>Rode Wijnen</h2>
          <span className="wine-cat-header__cn">红葡萄酒</span>
          <div className="wine-cat-header__line" />
        </div>
        <ColHead single />
        <div className="wine-list rv">
          {rodeWijnen.map((w, i) => (
            <WineRow key={i} wine={w} single />
          ))}
        </div>

        {/* ROSE WIJNEN */}
        <div className="wine-cat-header rv" id="rose">
          <div className="wine-cat-header__line" />
          <h2>Ros&eacute; Wijnen</h2>
          <span className="wine-cat-header__cn">桃红葡萄酒</span>
          <div className="wine-cat-header__line" />
        </div>
        <ColHead single />
        <div className="wine-list rv">
          {roseWijnen.map((w, i) => (
            <WineRow key={i} wine={w} single />
          ))}
        </div>

        <p className="wine-footnote rv">* De jaartallen van de wijnen zijn onder voorbehoud</p>

        <div className="info-note rv">
          <p className="info-note__text">
            <strong>Wijnadvies?</strong> Onze gastvrouw helpt u graag bij het kiezen van de perfecte
            wijn bij uw gerecht. Vraag gerust naar de wijn-spijs combinaties.
          </p>
        </div>
      </main>

      <section className="wine-cta">
        <div className="wine-cta__inner">
          <span className="wine-cta__label rv">Ontdek de menukaart</span>
          <h2 className="rv d1">
            Proost op een
            <br />
            <em>onvergetelijke avond</em>
          </h2>
          <div className="wine-cta__btns rv d2">
            <Link
              href="/menu"
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
              Bekijk de menukaart
            </Link>
            <Link
              href="/boek"
              className="btn-outline"
              style={{
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,.7)',
                borderBottom: '1px solid rgba(255,255,255,.3)',
                paddingBottom: 3,
              }}
            >
              Lees ons boek
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
