import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../../src/app/styles/index.scss';

import { withThemeDecorator } from '../../src/shared/config/storybook/decorators/withThemeDecorator';
import { withLangDecorator } from '../../src/shared/config/storybook/decorators/withLangDecorator';
import { withRouterDecorator } from '../../src/shared/config/storybook/decorators/withRouterDecorator';
import { handlers } from '@/app/mocks/handlers';

// Initialize MSW
initialize({
  onUnhandledRequest(req, print) {
    if (/\.(png|jpg|webp|svg|tsx?|css|jsx?|woff2)$/.test(req.url)) {
      return;
    }

    print.warning();
  },
}, handlers);

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

  loaders: [mswLoader],

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
