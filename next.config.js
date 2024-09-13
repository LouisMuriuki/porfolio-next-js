/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
   output: 'standalone',
  images: {
    domains: ["www.google.com"],
  },
};

module.exports = nextConfig;
