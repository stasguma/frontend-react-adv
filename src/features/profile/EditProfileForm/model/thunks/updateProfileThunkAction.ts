import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { IProfile } from '@/entities/Profile';
import type { IProfileForm } from '../types/types';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { isFetchBaseQueryError } from '@/shared/api';
import { profileApi } from '@/entities/Profile';

export const updateProfileThunkAction = createAsyncThunk<
  IProfile, IProfileForm, { rejectValue: FetchBaseQueryError; }
>(
  'profile/update',
  async (reqData, { rejectWithValue, dispatch }) => {
    try {
      const response = await dispatch(
        profileApi.endpoints.updateProfile.initiate(reqData)
      );

      if ('error' in response && isFetchBaseQueryError(response.error)) {
        return rejectWithValue(response.error);
      }

      return (response as { data: IProfile; }).data;
    } catch (error) {
      const e = error as FetchBaseQueryError;
      if (isFetchBaseQueryError(error)) {
        return rejectWithValue(e);
      }
      return rejectWithValue(e);
    }
  }
);
