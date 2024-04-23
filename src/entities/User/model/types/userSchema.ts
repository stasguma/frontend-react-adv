import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { EntityState } from '@reduxjs/toolkit';
import type { TLoadingState, TRoles } from '@/shared/types';

export interface IUser {
  id: number;
  username: string;
  avatarUrl: string;
  role: TRoles;
}

export interface UserSchema {
  loading: TLoadingState;
  data?: EntityState<IUser, number>;
  error?: FetchBaseQueryError;
}
