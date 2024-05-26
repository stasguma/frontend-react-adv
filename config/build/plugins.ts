import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { EsbuildPlugin } from 'esbuild-loader';

import { type IBuildOptions } from './types/config';

export const plugins = function (
  options: IBuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = options;

  const plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.htmlTemplate,
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
      chunkFilename: isDev ? 'css/[id].css' : 'css/[id].[contenthash:8].css',
    }),
    new EsbuildPlugin({
      define: {
        __IS_DEV__: JSON.stringify(isDev),
        // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new Dotenv(),
  ];

  if (!isDev) {
    plugins.push(
      new CopyPlugin({
        patterns: [
          { from: 'public/locales', to: 'locales' },
        ],
      })
    );
  }

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }));
  }

  return plugins;
};
