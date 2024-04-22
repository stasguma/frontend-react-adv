import type { IComment } from '../model/types/commentSchema';
import { COMMENT_TAG, baseApi } from '@/shared/api';

export const commentApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCommentsByArticleId: builder.query<IComment[], string | number>({
      query: id => ({
        url: `comments?articleId=${id}`,
        method: 'GET',
      }),
      providesTags: [COMMENT_TAG],
      // transformResponse: (response: { data: IComment; }, meta, arg) => response.data,
    }),
    addComment: builder.mutation<IComment, IComment>({
      query: data => ({
        url: `comments`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [COMMENT_TAG],
      // transformResponse: (response: { data: IComment; }, meta, arg) => response.data,
    }),
  }),
});

export const { useGetCommentsByArticleIdQuery, useAddCommentMutation } = commentApi;
