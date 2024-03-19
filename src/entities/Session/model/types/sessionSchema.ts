import type { IErrorResponse, TLoadingState } from '@/shared/types';

export interface ILoginForm {
  username: string;
  password: string;
}

export interface ISession {
  id?: string;
  username?: string;
  token?: string;
  isAuthenticated: boolean;
}

export interface SessionSchema extends ISession {
  loading: TLoadingState;
  error?: IErrorResponse;
}
