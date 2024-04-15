import type { Preview } from '@storybook/react';

import '../../src/app/styles/index.scss';

import { withThemeDecorator } from '../../src/shared/config/storybook/decorators/withThemeDecorator';
import { withLangDecorator } from '../../src/shared/config/storybook/decorators/withLangDecorator';
import { withRouterDecorator } from '../../src/shared/config/storybook/decorators/withRouterDecorator';

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
    withLangDecorator,
    withRouterDecorator,
    withThemeDecorator(),
  ],
};

export default preview;
