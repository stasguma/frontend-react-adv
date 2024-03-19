import type { Decorator } from '@storybook/react';

import { StoreProvider } from '@/app/providers/StoreProvider';

export const withStoreDecorator: Decorator = (Story, context) => {
  return (
    <StoreProvider><Story {...context} /></StoreProvider>
  );
};
