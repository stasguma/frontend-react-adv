import type { Preview } from '@storybook/react';

import '../../src/app/styles/index.scss';

// import i18n from '../../src/shared/config/i18n/i18n';
import { withThemeDecorator } from './decorators/withThemeDecorator';
import { withLangDecorator } from './decorators/withLangDecorator';
import { withRouterDecorator } from './decorators/withRouterDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },

    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'ua', right: '🇺🇦', title: 'Українська' },
        ],
      },
    },
  },

  decorators: [
    withThemeDecorator,
    withLangDecorator,
    withRouterDecorator,
  ],
};

export default preview;
