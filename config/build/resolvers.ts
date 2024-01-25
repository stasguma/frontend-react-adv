import type webpack from 'webpack';

import { type IBuildOptions } from './types/config';

export const resolvers = function (
  options: IBuildOptions
): webpack.ResolveOptions {
  const { paths } = options;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': paths.src,
    },
  };
};
