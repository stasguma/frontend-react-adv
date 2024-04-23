import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { RootState } from '@/app/providers/store';
import type { IUser } from '@/entities/User';
import type { IComment, AddCommentDto } from '@/entities/Comment';
import type { IAddCommentForm } from '../types/types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { isFetchBaseQueryError } from '@/shared/api';
import { commentApi } from '@/entities/Comment';
import { articleSelectors } from '@/entities/Article';

export const addCommentThunk = createAsyncThunk<
  IComment, IAddCommentForm, {
    rejectValue: FetchBaseQueryError;
    state: RootState;
  }
>(
  'comment/addComment',
  async (reqData, { rejectWithValue, dispatch, getState }) => {
    try {
      const sessionData = getState().session.data;
      const articleData = articleSelectors.selectAll(getState())[0];

      const preparedReqData: AddCommentDto = {
        ...reqData,
        articleId: articleData.id,
        userId: sessionData!.id,
        user: sessionData as IUser,
        createdAt: new Date().getTime(),
      };

      const response = await dispatch(
        commentApi.endpoints.addComment.initiate(preparedReqData)
      );

      if ('error' in response && isFetchBaseQueryError(response.error)) {
        return rejectWithValue(response.error);
      }

      return (response as { data: IComment; }).data;
    } catch (error) {
      const e = error as FetchBaseQueryError;
      if (isFetchBaseQueryError(error)) {
        return rejectWithValue(e);
      }
      return rejectWithValue(e);
    }
  }
);
