// next.config.js

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  babel: {
    presets: ['next/babel'],
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};
