/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Protocol used by the external image host
        hostname: 'cdn.sanity.io', // External domain for Sanity images
        pathname: '/images/**', // Path pattern for your images
      },
    ],
  },
};

module.exports = nextConfig;
