import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { ISession } from '@/entities/Session';
import type { ILoginForm } from '../types/types';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { isFetchBaseQueryError } from '@/shared/api';
import { sessionApi } from '@/entities/Session';

export const loginThunkAction = createAsyncThunk<
  ISession, ILoginForm, { rejectValue: FetchBaseQueryError; }
>(
  'authentication/login',
  async ({ username, password }, { rejectWithValue, dispatch }) => {
    try {
      const response = await dispatch(
        sessionApi.endpoints.login.initiate({ username, password })
      );

      if ('error' in response && isFetchBaseQueryError(response.error)) {
        return rejectWithValue(response.error);
      }

      return (response as { data: ISession; }).data;
    } catch (error) {
      const e = error as FetchBaseQueryError;
      if (isFetchBaseQueryError(error)) {
        return rejectWithValue(e);
      }
      return rejectWithValue(e);
    }
  }
);
