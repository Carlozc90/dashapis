/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cryptocompare.com", "www.thecocktaildb.com"],
  },
};

module.exports = nextConfig;
