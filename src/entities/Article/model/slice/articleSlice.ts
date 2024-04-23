// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/providers/store';
import type { IArticle, ArticleSchema } from '../types/articleSchema';

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { articleApi } from '../../api/articleApi';

export const articleAdapter = createEntityAdapter<IArticle>({
  // selectId: article => article.id,
  // sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState: ArticleSchema = {
  loading: 'idle',
  data: articleAdapter.getInitialState(),
  error: undefined,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(articleApi.endpoints.getArticles.matchPending, (state) => {
        state.loading = 'pending';
        state.error = undefined;
      })
      .addMatcher(articleApi.endpoints.getArticles.matchFulfilled, (state, action) => {
        state.loading = 'succeeded';
        articleAdapter.setAll(state.data, action.payload);
      })
      .addMatcher(articleApi.endpoints.getArticles.matchRejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      })

      .addMatcher(articleApi.endpoints.getArticleById.matchPending, (state) => {
        state.loading = 'pending';
        state.error = undefined;
      })
      .addMatcher(articleApi.endpoints.getArticleById.matchFulfilled, (state, action) => {
        state.loading = 'succeeded';
        articleAdapter.addOne(state.data, action.payload);
      })
      .addMatcher(articleApi.endpoints.getArticleById.matchRejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  },
});

// export const { setProfileData } = articleSlice.actions;

// export const selectProfileData = (state: RootState) => state.article?.data;
export const articleSelectors = articleAdapter.getSelectors<RootState>(
  state => state.article.data
);

export default articleSlice.reducer;
