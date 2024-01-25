import {
  type FC,
  type ReactNode,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import {
  ETheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from '../lib/ThemeContext';
import { useThemeRelyOnColorScheme } from '../lib/useThemeRelyOnColorScheme';
import { changeThemeInDOM } from '../lib/changeThemeInDOM';

interface IThemeProviderProps {
  children: ReactNode;
}

const defaultTheme
  = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) ?? ETheme.LIGHT;

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ETheme>(defaultTheme);

  useLayoutEffect(() => {
    changeThemeInDOM(theme);
  }, [theme]);

  useThemeRelyOnColorScheme();

  const memorizedProvider = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={memorizedProvider}>
      {children}
    </ThemeContext.Provider>
  );
};
