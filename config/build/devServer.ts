import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { IBuildOptions } from "./types/config";

export const devServer = function ({
  paths,
  port,
}: IBuildOptions): DevServerConfiguration {
  return {
    static: paths.devServer,
    port,
    historyApiFallback: true,
  };
};
