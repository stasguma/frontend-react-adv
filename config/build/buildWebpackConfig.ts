import type webpack from 'webpack';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { devServer } from './devServer';
import { loaders } from './loaders';
import { resolvers } from './resolvers';
import { plugins } from './plugins';

import { type IBuildOptions } from './types/config';

export const buildWebpackConfig = function (
  options: IBuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    devtool: isDev ? 'inline-source-map' : 'none',
    devServer: isDev ? devServer(options) : undefined,
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: isDev ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
      clean: true,
    },
    module: {
      rules: loaders(options),
    },
    resolve: resolvers(options),
    plugins: plugins(options),
    optimization: {
      runtimeChunk: 'single',
      minimizer: [new CssMinimizerPlugin()],
    },
  };
};
