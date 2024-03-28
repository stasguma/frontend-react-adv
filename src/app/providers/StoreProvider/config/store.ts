import type { ICreateStoreArgs, IStoreWithReducerManager, StateSchema } from '../types/types';
import type { ReducersMapObject } from '@reduxjs/toolkit';

import { configureStore } from '@reduxjs/toolkit';

// import { profileSlice } from '@/entities/Profile';
import { sessionSlice } from '@/entities/Session';
import { authListenerMiddleware } from '@/features/authentication/Login';
import { createReducerManager } from './reducerManager';

const staticReducers: Partial<ReducersMapObject<StateSchema>> = {
  // [profileSlice.name]: profileSlice.reducer,
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
        .concat(authListenerMiddleware.middleware),
  }) as IStoreWithReducerManager;

  store.reducerManager = reducerManager;

  return store;
}

export const appStore = createStore();

export type AppDispatch = typeof appStore.dispatch;
export type RootState = StateSchema;
// export type RootState = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof appStore.getState>;

// const staticReducers = {
//   users: usersReducer,
//   posts: postsReducer
// }

// export function configureStore(initialState) {
//   const reducerManager = createReducerManager(staticReducers)

//   // Create a store with the root reducer function being the one exposed by the manager.
//   const store = createStore(reducerManager.reduce, initialState)

//   // Optional: Put the reducer manager on the store so it is easily accessible
//   store.reducerManager = reducerManager
// }
