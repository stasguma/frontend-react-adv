import type { IArticle } from '../model/types/articleSchema';
import { ARTICLE_TAG, baseApi } from '@/shared/api';

export const articleApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getArticles: builder.query<IArticle[], void>({
      query: () => ({
        url: `articles`,
        method: 'GET',
      }),
      providesTags: [ARTICLE_TAG],
    }),
    getArticleById: builder.query<IArticle, number | string>({
      query: id => ({
        url: `articles/${id}`,
        method: 'GET',
      }),
      providesTags: [ARTICLE_TAG],
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleByIdQuery } = articleApi;
