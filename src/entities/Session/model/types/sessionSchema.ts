import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { TLoadingState, TRoles } from '@/shared/types';

export interface ISession {
  id: string;
  username: string;
  token: string;
  isAuthenticated: boolean;
  avatarUrl: string;
  role: TRoles;
}

export interface SessionSchema {
  loading: TLoadingState;
  data?: ISession;
  error?: FetchBaseQueryError;
  sessionInited: boolean;
}
