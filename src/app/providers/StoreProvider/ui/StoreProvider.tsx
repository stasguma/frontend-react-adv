import type { ReactNode, FC } from 'react';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { RootState } from '../config/store';

import { Provider } from 'react-redux';

import { appStore, createStore } from '../config/store';

interface IProps {
  children: ReactNode;
  initialState?: DeepPartial<RootState>;
  asyncReducers?: Partial<ReducersMapObject<RootState>>;
}

export const StoreProvider: FC<IProps> = (props) => {
  const { children, initialState, asyncReducers } = props;
  const store = initialState ?? asyncReducers
    ? createStore({ initialState, asyncReducers })
    : appStore;

  return (
    <Provider store={store}>{children}</Provider>
  );
};
