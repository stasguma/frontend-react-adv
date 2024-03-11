import type { Decorator } from '@storybook/react';
import type { ETheme } from '../../../src/app/providers/ThemeProvider';

import { useEffect } from 'react';

import { ThemeProvider } from '../../../src/app/providers/ThemeProvider';
import { changeThemeInDOM } from '../../../src/app/providers/ThemeProvider/lib/changeThemeInDOM';

export const withThemeDecorator: Decorator = (Story, context) => {
  const { theme } = context.globals;

  /* eslint-disable-next-line */
  useEffect(() => {
    changeThemeInDOM(theme as ETheme);
  }, [theme]);

  return (
    <ThemeProvider><Story /></ThemeProvider>
  );
};
