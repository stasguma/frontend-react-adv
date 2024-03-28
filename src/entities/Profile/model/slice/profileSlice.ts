// import type { PayloadAction } from '@reduxjs/toolkit';
import type { ProfileSchema } from '../types/profileSchema';

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState: ProfileSchema = {
  loading: 'idle',
  data: undefined,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getProfileData: state => state.data as ProfileSchema | undefined,
  },
});

export const { getProfileData } = profileSlice.actions;

export default profileSlice.reducer;
