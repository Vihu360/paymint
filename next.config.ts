import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['upload.wikimedia.org'],
  },

};

export default nextConfig;
