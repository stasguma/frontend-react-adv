import { useEffect } from 'react';

import { ETheme } from './ThemeContext';
import { changeThemeInDOM } from './changeThemeInDOM';

export const useThemeRelyOnColorScheme = (): void => {
  const OSColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)');

  const onThemeChange = (event: MediaQueryListEvent): void => {
    if (event.matches) {
      changeThemeInDOM(ETheme.DARK);
    } else {
      changeThemeInDOM(ETheme.LIGHT);
    }
  };
  useEffect(() => {
    OSColorSchemeDark.addEventListener('change', onThemeChange);
    return () => {
      OSColorSchemeDark.removeEventListener('change', onThemeChange);
    };
  }, [OSColorSchemeDark]);
};
