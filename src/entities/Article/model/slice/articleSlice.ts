import type { PayloadAction } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { RootState } from '@/app/providers/store';
import type { IArticle, ArticleSchema, TViewTypes } from '../types/articleSchema';

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_VIEW_TYPE_KEY } from '@/shared/consts/localStorage';
import { LocalStorage } from '@/shared/lib';
import { articleApi } from '../../api/articleApi';
import { FETCH_ARTICLES_GRID_LIMIT, FETCH_ARTICLES_LIST_LIMIT } from '../consts/consts';

const defaultViewType = LocalStorage.getItem(LOCAL_STORAGE_VIEW_TYPE_KEY) as TViewTypes ?? 'grid';

export const articleAdapter = createEntityAdapter<IArticle>({
  // selectId: article => article.id,
  // sortComparer: (a, b) => b.createdAt - a.createdAt,
});

const initialState: ArticleSchema = {
  loading: 'idle',
  data: articleAdapter.getInitialState(),
  viewType: defaultViewType,
  page: 1,
  limit: defaultViewType === 'grid' ? FETCH_ARTICLES_GRID_LIMIT : FETCH_ARTICLES_LIST_LIMIT,
  hasMore: true,
  error: undefined,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    toggleViewType: (state) => {
      articleAdapter.removeAll(state.data);
      const viewType = state.viewType === 'grid' ? 'list' : 'grid';
      state.viewType = viewType;
      state.page = 1;
      state.limit = viewType === 'grid' ? FETCH_ARTICLES_GRID_LIMIT : FETCH_ARTICLES_LIST_LIMIT;

      LocalStorage.setItem(LOCAL_STORAGE_VIEW_TYPE_KEY, viewType);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(articleApi.endpoints.getArticles.matchPending, (state) => {
        state.loading = 'pending';
        state.error = undefined;
      })
      .addMatcher(articleApi.endpoints.getArticles.matchFulfilled, (state, action) => {
        const { data, links } = action.payload;
        state.loading = 'succeeded';
        articleAdapter.addMany(state.data, data);
        state.hasMore = links.current < links.pages;
      })
      .addMatcher(articleApi.endpoints.getArticles.matchRejected, (state, action: PayloadAction<FetchBaseQueryError>) => {
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
      .addMatcher(articleApi.endpoints.getArticleById.matchRejected, (state, action: PayloadAction<FetchBaseQueryError>) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  },
});

export const { toggleViewType, setPage } = articleSlice.actions;

export const selectViewType = (state: RootState) => state.article?.viewType;
export const selectPage = (state: RootState) => state.article?.page;
export const selectLimit = (state: RootState) => state.article?.limit;
export const selectHasMore = (state: RootState) => state.article?.hasMore;
export const articleSelectors = articleAdapter.getSelectors<RootState>(
  state => state.article?.data ?? articleAdapter.getInitialState()
);

export default articleSlice.reducer;
