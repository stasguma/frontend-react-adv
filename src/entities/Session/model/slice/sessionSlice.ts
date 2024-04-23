// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/providers/store';
import type { ISession, SessionSchema } from '../types/sessionSchema';

import { createSlice } from '@reduxjs/toolkit';

import { LocalStorage } from '@/shared/lib/LocalStorage/LocalStorage';
import { LOCAL_STORAGE_SESSION_KEY } from '@/shared/consts/localStorage';
import { sessionApi } from '../../api/sessionApi';

const initialState: SessionSchema = {
  loading: 'idle',
  data: undefined,
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
        state.data = session;
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
        state.data = { ...action.payload, isAuthenticated: true };
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
  },
});

export const { clearSession, initSession } = sessionSlice.actions;

export const selectIsLoading = (state: RootState) => state.session.loading === 'pending';
export const selectIsLoadingSuccess = (state: RootState) => state.session.loading === 'succeeded';
export const selectSessionData = (state: RootState) => state.session.data;
export const selectIsSessionInited = (state: RootState) => state.session.sessionInited;
export const selectIsAuth = (state: RootState) => state.session.data?.isAuthenticated;
export const selectError = (state: RootState) => state.session.error;

export default sessionSlice.reducer;
