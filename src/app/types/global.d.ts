declare module '*.scss' {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

/* eslint-disable-next-line */
declare const __IS_DEV__: boolean;

declare type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
