import { createContext } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface IThemeContext {
  theme: ETheme | '';
  setTheme: (theme: ETheme) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: '',
  setTheme: () => null,
});
