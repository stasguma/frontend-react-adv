import type webpack from 'webpack';
import type { IBuildOptions } from '../types/config';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const cssLoader = (options: Partial<IBuildOptions>): webpack.RuleSetRule => {
  const { isDev } = options;

  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.(sass|scss|css)$/i,
            localIdentName: isDev
              ? '[local]--[hash:base64:4]'
              : '[hash:base64:8]',
          },
        },
      },
      { loader: 'sass-loader' },
    ],
  };
};
