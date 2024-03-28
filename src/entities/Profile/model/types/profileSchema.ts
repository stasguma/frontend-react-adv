import type { IErrorResponse, TLoadingState } from '@/shared/types';
import type { Country, Currency } from '@/shared/consts';

export interface Profile {
  username: string;
  email: string;
  city: string;
  country: typeof Country;
  currency: typeof Currency;
  avatarUrl: string;
}

export interface ProfileSchema {
  loading: TLoadingState;
  data?: Profile;
  error?: IErrorResponse;
}
