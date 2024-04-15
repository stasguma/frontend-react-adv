import type { Decorator } from '@storybook/react';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { RootState } from '@/app/providers/store';

import { StoreProvider } from '@/app/providers/store';

interface IArgs {
  initialState?: DeepPartial<RootState>;
  asyncReducers?: Partial<ReducersMapObject<RootState>>;
}

export function withStoreDecorator({ initialState, asyncReducers }: IArgs = {}): Decorator {
  return function withStoreDecorator(Story, context) {
    return (
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <Story {...context} />
      </StoreProvider>
    );
  };
};
