import type { MetadataRoute } from 'next';
import { kerstActive } from '@/lib/kerst';

const BASE_URL = 'https://www.asianglories.nl';

/**
 * Generates /sitemap.xml automatically. Next.js reads this file at build time
 * and serves the resulting XML. Add new routes here when we create them.
 * Rebuilt hourly so seasonal pages (Kerst) drop out by themselves.
 */
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/menu`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wijnkaart`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/reserveer`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/boek`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    ...(kerstActive()
      ? [
          {
            url: `${BASE_URL}/kerst`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
          },
        ]
      : []),
  ];
}
