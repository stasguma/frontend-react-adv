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
      // transformResponse: (response: { data: IArticle; }, meta, arg) => response.data,
    }),
    getArticleById: builder.query<IArticle, number | string>({
      query: id => ({
        url: `articles/${id}`,
        method: 'GET',
      }),
      providesTags: [ARTICLE_TAG],
      // transformResponse: (response: { data: IArticle; }, meta, arg) => response.data,
    }),
    // updateArticle: builder.mutation<IArticle, Args>({
    //   query: data => ({
    //     url: `sendSome`,
    //     method: 'POST',
    //     body: data,
    //   }),
    //   invalidatesTags: [ARTICLE_TAG],
    //   // transformResponse: (response: { data: IArticle; }, meta, arg) => response.data,
    // }),
  }),
});

export const { useGetArticlesQuery, useGetArticleByIdQuery } = articleApi;
