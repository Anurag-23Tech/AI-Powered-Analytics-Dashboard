// next.config.js
// next.config.js
module.exports = {
  // Remove turbopack options and use Webpack
  experimental: {
    turbopack: false,  // Disable Turbopack for now
  },
  webpack: (config) => {
    return config;
  },
};
