'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

/**
 * Lightweight bilingual layer.
 *
 * Why this approach: full Next.js i18n routing (locale-prefixed paths) is the
 * right answer for a polished bilingual site, but it requires translating every
 * page. This Provider lets us ship a working language toggle now, with shared
 * UI strings translated, and migrate to route-based i18n later without breaking
 * the component contract.
 *
 * The chosen locale is persisted in localStorage so it survives page reloads.
 */

export type Locale = 'nl' | 'en';

type Dict = Record<string, { nl: string; en: string }>;

const DICT: Dict = {
  // Navigation
  'nav.about': { nl: 'Over ons', en: 'About' },
  'nav.menu': { nl: 'Menu', en: 'Menu' },
  'nav.wine': { nl: 'Wijnkaart', en: 'Wine list' },
  'nav.book': { nl: 'Boek', en: 'Book' },
  'nav.events': { nl: 'Evenementen', en: 'Events' },
  'nav.hours': { nl: 'Openingstijden', en: 'Hours' },
  'nav.contact': { nl: 'Contact', en: 'Contact' },
  'nav.reserve': { nl: 'Reserveer', en: 'Reserve' },

  // Footer
  'footer.rights': {
    nl: 'Alle rechten voorbehouden.',
    en: 'All rights reserved.',
  },

  // Lang toggle labels
  'lang.switch.nl': { nl: 'NL', en: 'NL' },
  'lang.switch.en': { nl: 'EN', en: 'EN' },

  // ---- Homepage ----
  'home.hero.kicker': {
    nl: 'Rotterdam — Kantonees & Sichuan',
    en: 'Rotterdam — Cantonese & Sichuan',
  },
  'home.hero.title1': { nl: 'Waar elke maaltijd', en: 'Where every meal' },
  'home.hero.title2': { nl: 'een', en: 'tells a' },
  'home.hero.title3': { nl: 'verhaal vertelt', en: 'story' },
  'home.hero.subtitle': {
    nl:
      'Verfijnde Chinese keuken bereid met eeuwenoude technieken en zorgvuldig geselecteerde ingrediënten. Een ervaring die bijblijft.',
    en:
      'Refined Chinese cuisine prepared with centuries-old techniques and carefully selected ingredients. An experience that stays with you.',
  },
  'home.hero.discover': { nl: 'Ontdek ons verhaal', en: 'Discover our story' },
  'home.hero.viewmenu': { nl: 'Bekijk de menukaart', en: 'View the menu' },
  'home.hero.scroll': { nl: 'Scroll', en: 'Scroll' },

  // Menu CTA strip
  'home.menucta.label': { nl: 'Onze menukaart', en: 'Our menu' },
  'home.menucta.desc': {
    nl:
      'Kantonese klassiekers, Sichuan specialiteiten, handgemaakte dim sum en verfijnde zeevruchtgerechten',
    en:
      'Cantonese classics, Sichuan specialties, handmade dim sum and refined seafood dishes',
  },
  'home.menucta.btn': { nl: 'Bekijk het menu →', en: 'View the menu →' },

  // About
  'home.about.label': { nl: 'Ons verhaal', en: 'Our story' },
  'home.about.title1': { nl: 'Eeuwenoude traditie,', en: 'Centuries-old tradition,' },
  'home.about.title2': { nl: 'hedendaagse ziel', en: 'contemporary soul' },
  'home.about.body1': {
    nl:
      'Asian Glories is geboren vanuit een diepe liefde voor de rijke culinaire tradities van China. In het hart van Rotterdam bieden wij een eetervaring waarbij authenticiteit en moderniteit samensmelten, in elke saus, elke bereiding, elk gerecht.',
    en:
      "Asian Glories was born from a deep love for the rich culinary traditions of China. In the heart of Rotterdam, we offer a dining experience where authenticity and modernity meet in every sauce, every preparation, every dish.",
  },
  'home.about.body2': {
    nl:
      'Van handgemaakte dim sum tot de traditioneel bereide Peking eend met vers gemaakte pannenkoekjes, elk bord vertelt het verhaal van ambacht, pure smaken en generaties aan vakmanschap.',
    en:
      'From handmade dim sum to traditional Peking duck with freshly made pancakes, every plate tells a story of craft, pure flavours and generations of mastery.',
  },
  'home.about.link': { nl: 'Bekijk de menukaart →', en: 'View the menu →' },

  // Parallax feature
  'home.feature.label': { nl: 'De keuken', en: 'The kitchen' },
  'home.feature.title1': { nl: 'Kantonees', en: 'Cantonese' },
  'home.feature.title2': { nl: '& Sichuan', en: '& Sichuan' },
  'home.feature.body': {
    nl:
      'Twee grote tradities van de Chinese keuken, elk met hun eigen karakter en ziel. Delicate Kantonese smaken naast de intense, geurige wereld van Sichuan.',
    en:
      'Two great traditions of Chinese cuisine, each with their own character and soul. Delicate Cantonese flavours alongside the intense, aromatic world of Sichuan.',
  },
  'home.feature.btn': { nl: 'Ontdek het menu', en: 'Discover the menu' },

  // Dishes section
  'home.dishes.label': { nl: 'Onze gerechten', en: 'Our dishes' },
  'home.dishes.title1': { nl: 'Signature', en: 'Signature' },
  'home.dishes.title2': { nl: 'gerechten', en: 'dishes' },
  'home.dishes.link': { nl: 'Volledige kaart →', en: 'Full menu →' },
  'home.dishes.shared.name': { nl: 'Shared dining', en: 'Shared dining' },
  'home.dishes.shared.desc': {
    nl: 'Onze keuken in een gedeelde setting',
    en: 'Our kitchen in a shared setting',
  },
  'home.dishes.dimsum.name': { nl: 'Handgemaakte dim sum', en: 'Handmade dim sum' },
  'home.dishes.dimsum.desc': {
    nl: 'Dagelijks vers in de keuken bereid',
    en: 'Made fresh in the kitchen daily',
  },
  'home.dishes.siuyuk.name': { nl: 'Siu-Yuk', en: 'Siu-Yuk' },
  'home.dishes.siuyuk.desc': {
    nl: 'Krokant geroosterd buikspek',
    en: 'Crispy roasted pork belly',
  },
  'home.dishes.crispybeef.name': { nl: 'Crispy beef', en: 'Crispy beef' },
  'home.dishes.crispybeef.desc': {
    nl: 'Sesam, mandarijn, zoetzuur',
    en: 'Sesame, mandarin, sweet & sour',
  },
  'home.dishes.suikau.name': { nl: 'Sui kau-soep', en: 'Sui kau soup' },
  'home.dishes.suikau.desc': {
    nl: 'Bouillon met handgemaakte ravioli',
    en: 'Broth with handmade ravioli',
  },

  // Combined "More about us" section (formerly video + press)
  'home.more.label': { nl: 'Meer over ons', en: 'More about us' },
  'home.more.title1': { nl: 'Vakmanschap', en: 'Craftsmanship' },
  'home.more.title2': { nl: '& erkenning', en: '& recognition' },
  'home.more.body': {
    nl:
      'Stap binnen in onze keuken en zie hoe traditionele technieken tot leven komen. Elke beweging, elke timing, elk detail is het resultaat van jarenlange toewijding, en dat blijft niet onopgemerkt.',
    en:
      'Step into our kitchen and see traditional techniques come to life. Every motion, every timing, every detail is the result of years of dedication, and it does not go unnoticed.',
  },
  'home.more.link': { nl: 'Bekijk de menukaart →', en: 'View the menu →' },
  'home.more.divider': { nl: 'In de pers', en: 'In the press' },

  // Legacy video keys kept for compatibility (unused after the merge)
  'home.video.label': { nl: 'Achter de schermen', en: 'Behind the scenes' },
  'home.video.title1': { nl: 'Vakmanschap', en: 'Craftsmanship' },
  'home.video.title2': { nl: 'in beweging', en: 'in motion' },
  'home.video.body': {
    nl:
      'Stap binnen in onze keuken en zie hoe traditionele technieken tot leven komen. Elke beweging, elke timing, elk detail is het resultaat van jarenlange toewijding.',
    en:
      'Step into our kitchen and see traditional techniques come to life. Every motion, every timing, every detail is the result of years of dedication.',
  },
  'home.video.link': { nl: 'Bekijk de menukaart →', en: 'View the menu →' },

  // Gallery
  'home.gallery.label': { nl: 'Galerij', en: 'Gallery' },
  'home.gallery.title1': { nl: 'Sfeer &', en: 'Ambience &' },
  'home.gallery.title2': { nl: 'smaak', en: 'taste' },

  // Events
  'home.events.label': { nl: 'Evenementen', en: 'Events' },
  'home.events.title1': { nl: 'Gelegenheden', en: 'Occasions' },
  'home.events.title2': { nl: 'om te vieren', en: 'to celebrate' },
  'home.events.cta': { nl: 'Neem contact op', en: 'Get in touch' },
  'home.events.private.title': { nl: 'Privé diners', en: 'Private dinners' },
  'home.events.private.txt': {
    nl:
      'Boek ons restaurant voor verjaardagen, jubilea of zakelijke bijeenkomsten in stijl.',
    en:
      'Book our restaurant for birthdays, anniversaries or business gatherings in style.',
  },
  'home.events.private.li1': { nl: 'Tot 60 gasten', en: 'Up to 60 guests' },
  'home.events.private.li2': {
    nl: 'Op maat samengesteld menu',
    en: 'Custom-curated menu',
  },
  'home.events.shared.title': { nl: 'Shared dining', en: 'Shared dining' },
  'home.events.shared.txt': {
    nl:
      'Ervaar onze keuken in een gezellige, gedeelde setting met meerdere bereidingen aan tafel.',
    en:
      'Experience our kitchen in an intimate, shared setting with multiple preparations at the table.',
  },
  'home.events.corp.title': { nl: 'Bedrijfsevents', en: 'Corporate events' },
  'home.events.corp.txt': {
    nl:
      'Indruk maken op klanten of het team belonen, in een unieke culinaire omgeving.',
    en: 'Impress clients or reward your team in a unique culinary setting.',
  },

  // Quote
  'home.quote.text': {
    nl: 'Een verfijnde Chinese keuken die de smaak van Rotterdam blijft definiëren.',
    en: 'A refined Chinese kitchen that keeps defining the taste of Rotterdam.',
  },
  'home.quote.attr': { nl: 'Pers — Asian Glories', en: 'Press — Asian Glories' },

  // Reservation
  'home.reserve.eyebrow': { nl: 'Reserveer een tafel', en: 'Reserve a table' },
  'home.reserve.title1': { nl: 'Wij verheugen ons op', en: 'We look forward to' },
  'home.reserve.title2': { nl: 'uw bezoek', en: 'your visit' },
  'home.reserve.btn': { nl: 'Reserveer nu', en: 'Reserve now' },

  // Info section
  'home.info.hours': { nl: 'Openingstijden', en: 'Opening hours' },
  'home.info.contact': { nl: 'Contact', en: 'Contact' },
  'home.info.follow': { nl: 'Volg ons', en: 'Follow us' },
  'home.info.followtxt': {
    nl: 'Op de hoogte blijven van nieuwe gerechten, evenementen en culinaire avonden.',
    en: 'Stay up to date on new dishes, events and culinary evenings.',
  },
  'home.info.address': { nl: 'Adres', en: 'Address' },
  'home.info.phone': { nl: 'Telefoon', en: 'Phone' },
  'home.info.email': { nl: 'E-mail', en: 'Email' },
  'home.info.hours.note': {
    nl: '* Laatste reservering',
    en: '* Last seating',
  },

  // Footer credit
  'footer.creditby': { nl: 'Website door', en: 'Website by' },

  // Day names
  'day.mon': { nl: 'Maandag', en: 'Monday' },
  'day.tue': { nl: 'Dinsdag', en: 'Tuesday' },
  'day.wed': { nl: 'Woensdag', en: 'Wednesday' },
  'day.thu': { nl: 'Donderdag', en: 'Thursday' },
  'day.fri': { nl: 'Vrijdag', en: 'Friday' },
  'day.sat': { nl: 'Zaterdag', en: 'Saturday' },
  'day.sun': { nl: 'Zondag', en: 'Sunday' },
  'day.closed': { nl: 'Gesloten', en: 'Closed' },

  // Press wall
  'press.eyebrow': { nl: 'In de pers', en: 'In the press' },
};

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: keyof typeof DICT) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('nl');

  useEffect(() => {
    const stored = window.localStorage.getItem('ag-locale');
    if (stored === 'nl' || stored === 'en') setLocaleState(stored);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem('ag-locale', l);
    // Mirror to <html lang> so screen readers and search engines stay accurate
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: keyof typeof DICT) => DICT[key]?.[locale] ?? String(key),
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}

/** Tiny shorthand for read-only translation. */
export function useT() {
  return useI18n().t;
}
