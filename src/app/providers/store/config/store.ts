import type { ICreateStoreArgs, IStoreWithReducerManager, StateSchema } from '../types/types';
import type { ReducersMapObject } from '@reduxjs/toolkit';

import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from '@/shared/api';
import { sessionSlice } from '@/entities/Session';
import { authListenerMiddleware } from '@/features/authentication/Login';
import { createReducerManager } from './reducerManager';

const staticReducers: Partial<ReducersMapObject<StateSchema>> = {
  // [profileSlice.name]: profileSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
};
// const rootReducer = combineReducers({
//   [profileSlice.name]: profileSlice.reducer,
//   [sessionSlice.name]: sessionSlice.reducer,
// });

export function createStore(
  { initialState, asyncReducers }: ICreateStoreArgs = {}
) {
  const reducerManager = createReducerManager<StateSchema>({
    staticReducers,
    asyncReducers,
  });

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
    devTools: __IS_DEV__,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(
          authListenerMiddleware.middleware,
          baseApi.middleware
        ),
  }) as IStoreWithReducerManager;

  store.reducerManager = reducerManager;

  return store;
}

export const appStore = createStore();

export type AppDispatch = typeof appStore.dispatch;
export type RootState = StateSchema;
// export type RootState = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof appStore.getState>;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
