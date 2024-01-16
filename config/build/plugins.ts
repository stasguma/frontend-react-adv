import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { IBuildOptions } from "./types/config";

export const plugins = function (
  options: IBuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = options;

  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.htmlTemplate,
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? "css/[name].css" : "css/[name].[contenthash:8].css",
      chunkFilename: isDev ? "css/[id].css" : "css/[id].[contenthash:8].css",
    }),
  ];
};
