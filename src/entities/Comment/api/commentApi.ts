import type { AddCommentDto, IComment } from '../model/types/commentSchema';

import { COMMENT_TAG, baseApi } from '@/shared/api';
import { sortByDateDto } from '../lib/sortByDateDto';

export const commentApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCommentsByArticleId: builder.query<IComment[], string | number>({
      query: id => ({
        url: `comments?articleId=${id}`,
        method: 'GET',
      }),
      providesTags: [COMMENT_TAG],
      transformResponse: (response: IComment[]) => sortByDateDto(response),
    }),
    addComment: builder.mutation<IComment, AddCommentDto>({
      query: data => ({
        url: `comments`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [COMMENT_TAG],
      // transformResponse: (response IComment[], meta, arg) => response,
    }),
  }),
});

export const { useGetCommentsByArticleIdQuery, useAddCommentMutation } = commentApi;
