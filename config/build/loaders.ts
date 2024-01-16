import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { IBuildOptions } from "./types/config";

export const loaders = function (
  options: IBuildOptions
): webpack.RuleSetRule[] {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.(sass|scss|css)$/i,
          },
        },
      },
      { loader: "sass-loader" },
    ],
  };

  return [typescriptLoader, cssLoader];
};
