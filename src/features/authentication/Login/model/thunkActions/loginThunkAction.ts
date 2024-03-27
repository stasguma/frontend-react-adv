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
      await dispatch(login({ username, password })).unwrap();
    } catch (err) {
      const e = err as AxiosError<IErrorResponse>;

      return rejectWithValue(e.response?.data ?? (err) as IErrorResponse);
    }
  }
);
