// import type { PayloadAction } from '@reduxjs/toolkit';
import { type UserSchema } from '../types/userSchema';
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState: UserSchema = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAuthData: state => state.authData as UserSchema | undefined,
  },
});

export const { getAuthData } = userSlice.actions;

export default userSlice.reducer;
