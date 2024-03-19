import type { AxiosError, AxiosResponse } from 'axios';
import type { ILoginForm, ISession } from '../types/sessionSchema';
import type { IErrorResponse } from '@/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginThunkAction = createAsyncThunk<
  ISession, ILoginForm, { rejectValue: IErrorResponse | undefined; }
>(
  'session/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post<ILoginForm, AxiosResponse<ISession>>(
        'http://localhost:1111/api/login',
        { username, password }
      );

      return response.data;
    } catch (err) {
      const e = err as AxiosError<IErrorResponse>;
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      // return rejectWithValue(((err as { response: Record<string, string>; })).response.data);
      return rejectWithValue(e.response?.data);
    }
  }
);
