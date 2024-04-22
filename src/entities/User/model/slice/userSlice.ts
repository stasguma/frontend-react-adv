// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '@/app/providers/store';
import type { IUser, UserSchema } from '../types/userSchema';

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { userApi } from '../../api/userApi';

const userAdapter = createEntityAdapter<IUser>();

const initialState: UserSchema = {
  loading: 'idle',
  data: userAdapter.getInitialState(),
  error: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.getUserById.matchPending, (state) => {
        state.loading = 'pending';
        state.error = undefined;
      })
      .addMatcher(userApi.endpoints.getUserById.matchFulfilled, (state, action) => {
        // const newEntities = {}
        // action.payload.forEach(todo => {
        //   newEntities[todo.id] = todo
        // })
        // state.entities = newEntities
        userAdapter.setOne(state.data, action.payload);
        state.loading = 'succeeded';
      })
      .addMatcher(userApi.endpoints.getUserById.matchRejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
    // .addMatcher(loginThunkAction.settled, (state) => {
    //   state.loading = 'idle';
    // });
  },
});

// export const {  } = userSlice.actions;

// export const selectIsLoading = (state: RootState) => state.user.loading === 'pending';
// export const selectIsLoadingSuccess = (state: RootState) => state.user.loading === 'succeeded';
// export const selectSessionData = (state: RootState) => state.user;
// export const selectIsSessionInited = (state: RootState) => state.user.sessionInited;
// export const selectIsAuth = (state: RootState) => state.user.isAuthenticated;
// export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;
