import type { ILoginRequest } from './types';
import type { ISession as ILoginResponse } from '../model/types/sessionSchema';
import { SESSION_TAG, baseApi } from '@/shared/api';

export const sessionApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ILoginResponse, ILoginRequest>({
      query: data => ({
        url: `login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [SESSION_TAG],
      // transformResponse: (response: { data: ILoginResponse; }, meta, arg) => response.data,
    }),
  }),
});

export const { useLoginMutation } = sessionApi;
