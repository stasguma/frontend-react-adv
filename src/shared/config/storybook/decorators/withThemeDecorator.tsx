import { withThemeByDataAttribute } from '@storybook/addon-themes';

export const withThemeDecorator = () => {
  return withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  });
};
