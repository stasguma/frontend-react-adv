import type { AxiosError } from 'axios';
import type { ILoginForm } from '@/entities/Session';
import type { IErrorResponse } from '@/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginThunkAction as login } from '@/entities/Session';

export const loginThunkAction = createAsyncThunk<
  unknown, ILoginForm, { rejectValue: IErrorResponse | undefined; }
>(
  'authentication/login',
  async ({ username, password }, { rejectWithValue, dispatch }) => {
    try {
      return await dispatch(login({ username, password })).unwrap();
    } catch (err) {
      const e = err as AxiosError<IErrorResponse>;
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      // return rejectWithValue(((err as { response: Record<string, string>; })).response.data);
      return rejectWithValue(e.response?.data);
    }
  }
);
