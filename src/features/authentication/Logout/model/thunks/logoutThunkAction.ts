import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_SESSION_KEY } from '@/shared/consts/localStorage';
import { LocalStorage } from '@/shared/lib';
import { isFetchBaseQueryError } from '@/shared/api';
import { clearSession } from '@/entities/Session';

export const logoutThunkAction = createAsyncThunk<
  void, void, { rejectValue: FetchBaseQueryError; }
>(
  'authentication/logout',
  (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(clearSession());
      LocalStorage.removeItem(LOCAL_STORAGE_SESSION_KEY);
    } catch (error) {
      const e = error as FetchBaseQueryError;
      if (isFetchBaseQueryError(error)) {
        return rejectWithValue(e);
      }
      return rejectWithValue(e);
    }
  }
);
