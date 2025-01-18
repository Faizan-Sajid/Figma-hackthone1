import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds:true
  },
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN hostname
  },
};

export default nextConfig;
