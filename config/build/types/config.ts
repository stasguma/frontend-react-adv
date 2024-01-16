export interface IBuildEnvironment {
  development?: boolean;
  production?: boolean;
  port: number;
}

export type TBuildMode = "development" | "production";

export interface IBuildOptions {
  mode: TBuildMode;
  paths: IBuildPaths;
  port: number;
  isDev: boolean;
}

export interface IBuildPaths {
  entry: string;
  output: string;
  htmlTemplate: string;
  devServer: string;
}
