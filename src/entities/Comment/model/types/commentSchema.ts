import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { EntityState } from '@reduxjs/toolkit';
import type { TLoadingState } from '@/shared/types';
import type { IUser } from '@/entities/User';

export interface IComment {
  id: string;
  text: string;
  articleId: string;
  userId: string;
  user?: IUser;
}

export interface CommentSchema {
  loading: TLoadingState;
  data?: EntityState<IComment, string>;
  error?: FetchBaseQueryError;
}
