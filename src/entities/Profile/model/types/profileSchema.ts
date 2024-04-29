import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { TLoadingState, TObjectValues, TRoles } from '@/shared/types';
import type { Country, Currency } from '@/shared/consts';

export interface IProfile {
  id: number;
  username: string;
  email: string;
  city: string;
  country: TObjectValues<typeof Country>;
  currency: TObjectValues<typeof Currency>;
  avatarUrl: string;
  role: TRoles;
}

export interface ProfileSchema {
  loading: TLoadingState;
  data?: IProfile;
  error?: FetchBaseQueryError;
}
