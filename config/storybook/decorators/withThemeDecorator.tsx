import type { Decorator } from '@storybook/react';

import { ThemeProvider } from '../../../src/app/providers/ThemeProvider';

export const withThemeDecorator: Decorator = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider>
      <div data-theme={theme as string}><Story /></div>
    </ThemeProvider>
  );
};
