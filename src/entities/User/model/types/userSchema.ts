import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { EntityState } from '@reduxjs/toolkit';
import type { TLoadingState, TObjectValues, TRoles } from '@/shared/types';
import type { Country, Currency } from '@/shared/consts';

export interface IUser {
  id: number;
  username: string;
  email: string;
  city: string;
  country: TObjectValues<typeof Country>;
  currency: TObjectValues<typeof Currency>;
  avatarUrl: string;
  role: TRoles;
}

export interface UserSchema {
  loading: TLoadingState;
  data?: EntityState<IUser, number>;
  error?: FetchBaseQueryError;
}
