import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { EntityState } from '@reduxjs/toolkit';
import type { TLoadingState } from '@/shared/types';
import type { IUser } from '@/entities/User';

export interface AddCommentDto {
  text: string;
  articleId: number;
  userId: number;
  user: IUser;
  createdAt: number;
}

export interface IComment {
  id: number;
  text: string;
  articleId: number;
  userId: number;
  createdAt: number;
  user?: IUser;
}

export interface CommentSchema {
  loading: TLoadingState;
  data: EntityState<IComment, number>;
  error?: FetchBaseQueryError;
}
