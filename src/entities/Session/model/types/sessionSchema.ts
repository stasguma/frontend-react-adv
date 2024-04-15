import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { /* IErrorResponse, */ TLoadingState } from '@/shared/types';

export interface ISession {
  id?: string;
  username?: string;
  token?: string;
  isAuthenticated: boolean;
}

export interface SessionSchema extends ISession {
  loading: TLoadingState;
  error?: FetchBaseQueryError;
}
