import type { FC, ReactNode } from 'react';
import type { Reducer } from '@reduxjs/toolkit';
import type { RootState } from '@/app/providers/store';

import { useEffect } from 'react';

import { useAppDispatch, useAppStore } from '@/shared/model';

// type TReducerEntries = [keyof RootState, Reducer];

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as keyof RootState, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      Object.entries(reducers).forEach(([name]) => {
        store.reducerManager.remove(name as keyof RootState);
        dispatch({ type: `@DESTROY ${name} reducer` });
      });
    };
  }, []); /* eslint-disable-lin */

  return children;
};
