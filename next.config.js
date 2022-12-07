/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cloudflare-ipfs.com"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
