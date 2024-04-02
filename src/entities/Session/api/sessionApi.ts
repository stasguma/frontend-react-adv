import type { ILoginForm, ISession } from '../model/types/sessionSchema';
import { SESSION_TAG, baseApi } from '@/shared/api';

export const sessionApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ISession, ILoginForm>({
      query: data => ({
        url: `login`,
        method: 'post',
        body: data,
      }),
      invalidatesTags: [SESSION_TAG],
      // transformResponse: (response: { data: ISession; }, meta, arg) => response.data,
    }),
  }),
});

export const { useLoginMutation } = sessionApi;
