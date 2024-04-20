import type { Decorator } from '@storybook/react';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { RootState } from '@/app/providers/store';

import { StoreProvider } from '@/app/providers/store';

interface IArgs {
  initialState?: DeepPartial<RootState>;
  asyncReducers?: Partial<ReducersMapObject<RootState>>;
}

export const withStoreDecorator
  = ({ initialState, asyncReducers }: IArgs = {}): Decorator<IArgs> =>
    (Story, context) => {
      return (
        <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
          <Story {...context} />
        </StoreProvider>
      );
    };
