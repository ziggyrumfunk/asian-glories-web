import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reserveren | Asian Glories Rotterdam',
  description:
    'Reserveer een tafel bij Asian Glories Rotterdam via onze reserveringsknop, of neem contact op voor grotere gezelschappen en speciale gelegenheden.',
  alternates: { canonical: '/reserveer' },
  openGraph: {
    title: 'Reserveren | Asian Glories Rotterdam',
    description: 'Reserveer een tafel bij Asian Glories, Westewagenstraat 74, Rotterdam.',
  },
};

export default function ReserveerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
