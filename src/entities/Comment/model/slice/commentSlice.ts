import type { RootState } from '@/app/providers/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IComment, CommentSchema } from '../types/commentSchema';

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { commentApi } from '../../api/commentApi';

const commentAdapter = createEntityAdapter<IComment>({
  sortComparer: (a, b) => b.createdAt - a.createdAt,
});

const initialState: CommentSchema = {
  loading: 'idle',
  data: commentAdapter.getInitialState(),
  error: undefined,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(commentApi.endpoints.getCommentsByArticleId.matchPending, (state) => {
        state.loading = 'pending';
        state.error = undefined;
      })
      .addMatcher(commentApi.endpoints.getCommentsByArticleId.matchFulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.loading = 'succeeded';
        commentAdapter.setAll(state.data, action.payload);
      })
      .addMatcher(commentApi.endpoints.getCommentsByArticleId.matchRejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  },
});

// export const { setProfileData } = commentSlice.actions;

// export const selectProfileData = (state: RootState) => state.profile?.data;
export const commentSelectors = commentAdapter.getSelectors<RootState>(
  state => state.comment.data
);

export default commentSlice.reducer;
