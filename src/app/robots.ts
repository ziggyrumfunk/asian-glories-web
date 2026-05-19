import type { MetadataRoute } from 'next';

/**
 * Generates /robots.txt automatically. Next.js serves this from the App Router.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.asianglories.nl/sitemap.xml',
    host: 'https://www.asianglories.nl',
  };
}
