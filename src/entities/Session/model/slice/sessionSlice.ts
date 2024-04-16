// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/providers/store';
import type { ISession, SessionSchema } from '../types/sessionSchema';

import { createSlice } from '@reduxjs/toolkit';

import { LocalStorage } from '@/shared/lib/LocalStorage/LocalStorage';
import { LOCAL_STORAGE_SESSION_KEY } from '@/shared/consts/localStorage';
import { sessionApi } from '../../api/sessionApi';

const initialState: SessionSchema = {
  loading: 'idle',
  id: undefined,
  username: undefined,
  token: undefined,
  isAuthenticated: false,
  error: undefined,
  sessionInited: false,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSession: () => {
      return {
        ...initialState,
        sessionInited: true,
      };
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

      state.sessionInited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(sessionApi.endpoints.login.matchPending, (state) => {
        state.loading = 'pending';
        state.error = undefined;
      })
      .addMatcher(sessionApi.endpoints.login.matchFulfilled, (state, action) => {
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
      .addMatcher(sessionApi.endpoints.login.matchRejected, (state, action) => {
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
export const selectSessionData = (state: RootState) => state.session;
export const selectIsSessionInited = (state: RootState) => state.session.sessionInited;
export const selectIsAuth = (state: RootState) => state.session.isAuthenticated;
export const selectError = (state: RootState) => state.session.error;

export default sessionSlice.reducer;
