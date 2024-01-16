import webpack from "webpack";

export const resolvers = function (): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};
