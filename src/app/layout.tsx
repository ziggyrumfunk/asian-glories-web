import type { Metadata, Viewport } from 'next';
import { Cormorant, DM_Sans } from 'next/font/google';
import LoadingCurtain from '@/components/LoadingCurtain';
import ZenchefWidget from '@/components/ZenchefWidget';
import OpeningNotice from '@/components/OpeningNotice';
import { I18nProvider } from '@/lib/i18n';
import { getWeekHours } from '@/lib/hours';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#114032',
  width: 'device-width',
  initialScale: 1,
};

// Display serif used for headings (h1, h2, blockquote)
const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

// Body font fallback when Glacial Indifference is loading
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asianglories.nl'),
  title: 'Asian Glories Rotterdam | Verfijnd Chinees Restaurant | Kantonees & Sichuan',
  description:
    'Asian Glories is een verfijnd Chinees restaurant in Rotterdam, gespecialiseerd in authentieke Kantonese en Sichuanese gerechten. Bekroond met een Michelin Bib Gourmand en erkend door Gault&Millau. Lunch & diner, Westewagenstraat 74.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Asian Glories Rotterdam | Verfijnd Chinees Restaurant',
    description:
      'Authentieke Kantonese en Sichuanese gerechten in Rotterdam. Bekroond met een Michelin Bib Gourmand en erkend door Gault&Millau.',
    type: 'website',
    locale: 'nl_NL',
    images: ['/images/interior.jpg'],
  },
};

const baseRestaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Asian Glories',
  description:
    'Verfijnd Chinees restaurant in Rotterdam met authentieke Kantonese en Sichuanese gerechten. Bekroond met een Michelin Bib Gourmand en erkend door Gault&Millau.',
  url: 'https://www.asianglories.nl',
  telephone: '+31102542071',
  email: 'info@asianglories.nl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Westewagenstraat 74',
    addressLocality: 'Rotterdam',
    postalCode: '3011 AT',
    addressCountry: 'NL',
  },
  servesCuisine: ['Chinees', 'Kantonees', 'Sichuan', 'Dim Sum'],
  priceRange: '€€€',
  award: ['Michelin Bib Gourmand', 'Gault&Millau'],
  acceptsReservations: 'True',
  menu: 'https://www.asianglories.nl/menu',
  // Credit the web agency so search engines can connect the work back to us.
  creator: {
    '@type': 'Organization',
    name: 'Rumfunk',
    url: 'https://www.rumfunk.nl',
  },
};

// Regenerate prerendered pages hourly so date-based content (the opening hours
// switch on 19 October, the popup schedule) goes live without a redeploy.
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Built per render, not at module load, so the hours follow the current date.
  const restaurantSchema = {
    ...baseRestaurantSchema,
    openingHoursSpecification: getWeekHours()
      .filter((d) => d.opens)
      .map((d) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: d.schemaDay,
        opens: d.opens,
        closes: d.closes,
      })),
  };

  return (
    <html
      lang="nl"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <LoadingCurtain />
        <I18nProvider>
          {children}
          <OpeningNotice />
        </I18nProvider>
        <ZenchefWidget />
      </body>
    </html>
  );
}
