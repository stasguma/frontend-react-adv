// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/providers/store';
import type { ProfileSchema } from '../types/profileSchema';

import { createSlice } from '@reduxjs/toolkit';
import { profileApi } from '../../api/profileApi';

const initialState: ProfileSchema = {
  loading: 'idle',
  data: undefined,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(profileApi.endpoints.profile.matchPending, (state) => {
        state.loading = 'pending';
        state.error = undefined;
      })
      .addMatcher(profileApi.endpoints.profile.matchFulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = 'succeeded';
      })
      .addMatcher(profileApi.endpoints.profile.matchRejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      })

      .addMatcher(profileApi.endpoints.updateProfile.matchPending, (state) => {
        state.loading = 'pending';
        state.error = undefined;
      })
      .addMatcher(profileApi.endpoints.updateProfile.matchFulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = 'succeeded';
      })
      .addMatcher(profileApi.endpoints.updateProfile.matchRejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
    // .addMatcher(loginThunkAction.settled, (state) => {
    //   state.loading = 'idle';
    // });
  },
});

// export const {  } = profileSlice.actions;

export const selectProfileData = (state: RootState) => state.profile?.data;

export default profileSlice.reducer;
