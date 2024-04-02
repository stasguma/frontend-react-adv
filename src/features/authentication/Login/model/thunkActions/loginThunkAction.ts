import type { ILoginForm, ISession } from '@/entities/Session';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
// import type { IErrorResponse } from '@/shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { sessionApi } from '@/entities/Session';
import { isFetchBaseQueryError } from '@/shared/api';

interface IReturnType {
  data?: ISession;
  error?: FetchBaseQueryError;
}

export const loginThunkAction = createAsyncThunk<
  // IReturnType, ILoginForm, { rejectValue: IErrorResponse | undefined; }
  ISession, ILoginForm, { rejectValue: FetchBaseQueryError; }
>(
  'authentication/login',
  async ({ username, password }, { rejectWithValue, dispatch }) => {
    try {
      const { data, error } = await dispatch(
        sessionApi.endpoints.login.initiate({ username, password })
      );

      if (isFetchBaseQueryError(error)) {
        return rejectWithValue(error);
        // return rejectWithValue((response as { error: IErrorResponse; }).error);
      }

      return data;
      // return (response as { data: ISession; }).data;
    } catch (error) {
      // const e = error as AxiosError<IErrorResponse>;
      const e = error as FetchBaseQueryError;
      if (isFetchBaseQueryError(error)) {
        return rejectWithValue(e);
      }
      return rejectWithValue(e);
    }
  }
);
