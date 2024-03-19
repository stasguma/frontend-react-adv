import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/entities/User';
import { sessionSlice } from '@/entities/Session';
import { authListenerMiddleware } from '@/features/authentication/Login';

const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
});

export function createStore() {
  const store = configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(authListenerMiddleware.middleware),
  });

  return store;
}

export const appStore = createStore();

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
