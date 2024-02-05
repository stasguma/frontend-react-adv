import type { Decorator } from '@storybook/react';

import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../../src/shared/config/i18n/i18n';

// import { addons, useGlobals } from '@storybook/preview-api';
// import { FORCE_RE_RENDER } from '@storybook/core-events';

export const withLangDecorator: Decorator = (Story, context) => {
  const { locale } = context.globals;
  // const { i18n } = useTranslation();
  // const [globals, updateGlobals] = useGlobals();

  useEffect(() => {
    i18n.changeLanguage(locale);
    // doesn't work (bug?) https://github.com/storybookjs/storybook/issues/18477#issuecomment-1582653441
    // addons.getChannel().emit(FORCE_RE_RENDER);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story {...context} />
      </I18nextProvider>
    </Suspense>
  );
};
