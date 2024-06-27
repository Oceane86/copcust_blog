// next.config.js


/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { defaultLoaders }) => {
      defaultLoaders.babel.options = {
        ...defaultLoaders.babel.options,
        presets: [
          require.resolve('next/babel'),
          '@babel/preset-env', 
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties', 
        ],
      };
  
      return config;
    },
  };
  
  export default nextConfig;
  