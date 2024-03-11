import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  users: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: __IS_DEV__,
  // middleware: () => new Tuple(/* place middleware here */),
});
