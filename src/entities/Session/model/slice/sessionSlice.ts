// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/providers/StoreProvider';
import type { ISession, SessionSchema } from '../types/sessionSchema';

import { createSlice } from '@reduxjs/toolkit';

import { loginThunkAction } from '../thunkActions/loginThunkAction';
import { LocalStorage } from '@/shared/lib/LocalStorage/LocalStorage';
import { LOCAL_STORAGE_SESSION_KEY } from '@/shared/consts/localStorage';

const initialState: SessionSchema = {
  loading: 'idle',
  id: undefined,
  username: undefined,
  token: undefined,
  isAuthenticated: false,
  error: undefined,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSession: (state) => {
      state.id = undefined;
      state.username = undefined;
      state.token = undefined;
      state.isAuthenticated = false;
    },
    initSession: (state) => {
      const session = LocalStorage.getItem(LOCAL_STORAGE_SESSION_KEY) as ISession;

      if (session !== null) {
        const { id, username, token, isAuthenticated } = session;
        state.id = id;
        state.username = username;
        state.token = token;
        state.isAuthenticated = isAuthenticated;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunkAction.pending, (state) => {
        state.loading = 'pending';
        state.error = undefined;
      })
      .addCase(loginThunkAction.fulfilled, (state, action) => {
        const { username, id, token } = action.payload;
        state.id = id;
        state.username = username;
        state.token = token;
        state.isAuthenticated = true;
        // const newEntities = {}
        // action.payload.forEach(todo => {
        //   newEntities[todo.id] = todo
        // })
        // state.entities = newEntities
        state.loading = 'succeeded';
      })
      .addCase(loginThunkAction.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
    // .addMatcher(loginThunkAction.settled, (state) => {
    //   state.loading = 'idle';
    // });
  },
});

export const { clearSession, initSession } = sessionSlice.actions;

export const selectIsLoading = (state: RootState) => state.session.loading === 'pending';
export const selectIsLoadingSuccess = (state: RootState) => state.session.loading === 'succeeded';
export const selectUserId = (state: RootState) => state.session.id;
export const selectUsername = (state: RootState) => state.session.username;
export const selectToken = (state: RootState) => state.session.token;
export const selectIsAuth = (state: RootState) => state.session.isAuthenticated;
export const selectError = (state: RootState) => state.session.error;

export default sessionSlice.reducer;
