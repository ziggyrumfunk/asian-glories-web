/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // We're serving images from /public for now. When Supabase Storage is wired up,
    // add its hostname here under remotePatterns and switch image src values.
    remotePatterns: [],
    // Modern image formats. next/image will negotiate per request.
    formats: ['image/avif', 'image/webp'],
    // Sizes we expect to serve. Smaller sizes are inferred from these.
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/wijn', destination: '/wijnkaart', permanent: true },
      { source: '/wines', destination: '/wijnkaart', permanent: true },
      { source: '/wine', destination: '/wijnkaart', permanent: true },
      { source: '/wijnen', destination: '/wijnkaart', permanent: true },
      { source: '/menukaart', destination: '/menu', permanent: true },
      { source: '/book', destination: '/boek', permanent: true },
    ];
  },
};

export default nextConfig;
