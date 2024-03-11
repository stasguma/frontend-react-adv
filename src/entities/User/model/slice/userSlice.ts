import type { PayloadAction } from '@reduxjs/toolkit';
import { type UserSchema } from '../types/userSchema';
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState: UserSchema = {
  name: 'Stas',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = usersSlice.actions;

export default usersSlice.reducer;
