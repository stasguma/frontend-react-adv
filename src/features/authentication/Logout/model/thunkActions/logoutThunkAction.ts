import type { AxiosError } from 'axios';
import type { IErrorResponse } from '@/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_SESSION_KEY } from '@/shared/consts/localStorage';
import { LocalStorage } from '@/shared/lib';
import { clearSession } from '@/entities/Session';

export const logoutThunkAction = createAsyncThunk<
  void, void, { rejectValue: IErrorResponse | undefined; }
>(
  'authentication/logout',
  (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(clearSession());
      LocalStorage.removeItem(LOCAL_STORAGE_SESSION_KEY);
    } catch (err) {
      const e = err as AxiosError<IErrorResponse>;
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      // return rejectWithValue(((err as { response: Record<string, string>; })).response.data);
      return rejectWithValue(e.response?.data);
    }
  }
);
