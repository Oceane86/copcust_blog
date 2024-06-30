// next.config.js

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  async redirects() {
    return [
      {
        source: '/pages',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages/edit/:itemId',
        destination: '/pages/updated/:itemId',
        permanent: true,
      },
    ];
  },
};
