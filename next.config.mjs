import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  webpack: async (config, { defaultLoaders }) => {
    defaultLoaders.babel.options = {
      ...defaultLoaders.babel.options,
      presets: [
        await require.resolve('next/babel'),
        await require.resolve('@babel/preset-env'), 
      ],
      plugins: [
        await require.resolve('@babel/plugin-proposal-class-properties'), 
      ],
    };

    return config;
  },
};

export default nextConfig;
