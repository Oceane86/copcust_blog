/** @type {import('next').NextConfig} */
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const require = (path) => import(fileURLToPath(new URL(path, import.meta.url)));

const nextConfig = {
    webpack: async (config, { defaultLoaders }) => {
      defaultLoaders.babel.options = {
        ...defaultLoaders.babel.options,
        presets: [
          (await require('next/babel')).default,
          (await require('@babel/preset-env')).default,
        ],
        plugins: [
          (await require('@babel/plugin-proposal-class-properties')).default,
        ],
      };
  
      return config;
    },
};

export default nextConfig;
