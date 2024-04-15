import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { TLoadingState, TObjectValues } from '@/shared/types';
import type { Country, Currency } from '@/shared/consts';

export interface IProfile {
  username: string;
  email: string;
  city: string;
  country: TObjectValues<typeof Country>;
  currency: TObjectValues<typeof Currency>;
  avatarUrl: string;
}

export interface ProfileSchema {
  loading: TLoadingState;
  data?: IProfile;
  error?: FetchBaseQueryError;
}
