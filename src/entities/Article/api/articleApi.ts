import type { IArticle } from '../model/types/articleSchema';
import type { ArticleDto, ILink } from './types';

import { ARTICLE_TAG, baseApi } from '@/shared/api';
import { mapArticles } from '../lib/mapArticles';

interface IArticleReq {
  page: number;
  limit: number;
}

export interface IArticlesRes {
  data: IArticle[];
  links: ILink;
}

export const articleApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getArticles: builder.query<IArticlesRes, IArticleReq>({
      query: ({ page, limit }) => ({
        url: `articles`,
        method: 'GET',
        params: {
          // _sort: 'createdAt',
          // _order: 'desc',
          _limit: limit,
          _page: page,
        },
      }),
      providesTags: [ARTICLE_TAG],
      transformResponse: (response: ArticleDto) => mapArticles(response),
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
