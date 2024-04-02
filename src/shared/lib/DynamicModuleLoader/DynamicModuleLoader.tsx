import type { FC, ReactNode } from 'react';
import type { Reducer } from '@reduxjs/toolkit';
import type { RootState } from '@/app/providers/StoreProvider';

import { useEffect } from 'react';

// import { useAppDispatch, useAppStore } from '@/app/providers/StoreProvider/config/hooks';
import { useAppDispatch, useAppStore } from '@/shared/model';

type TReducerEntries = [keyof RootState, Reducer];

export type TReducers = {
  [name in keyof RootState]?: Reducer;
};

interface IProps {
  children: ReactNode;
  reducers: TReducers;
}

export const DynamicModuleLoader: FC<IProps> = (props) => {
  const { reducers, children } = props;
  const store = useAppStore();
  // const store = useStore() as ReturnType<typeof createStore>;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: TReducerEntries) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      Object.entries(reducers).forEach(([name]: TReducerEntries) => {
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
      });
    };
  }, []); /* eslint-disable-line */

  return children;
};
