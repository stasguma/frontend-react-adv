import type { FC, ReactNode } from 'react';
import type { Reducer } from '@reduxjs/toolkit';
import type { RootState } from '@/app/providers/StoreProvider';

import { useEffect } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch, useAppStore } from '@/app/providers/StoreProvider/config/hooks';
// import { appStore } from '@/app/providers/StoreProvider/config/store';

type TReducers = {
  [name in keyof RootState]: Reducer;
};

interface IProps {
  children: ReactNode;
  reducers: TReducers;
}

export const DynamicModuleLoader: FC<IProps> = (props) => {
  const { reducers, children } = props;
  // const store = useAppStore();
  const store = useStore();
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.values(reducers).forEach(({ name, reducer }) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      Object.values(reducers).forEach(({ name }) => {
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
      });
    };
  }, []);

  return children;
};
