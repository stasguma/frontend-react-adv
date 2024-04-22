import type { IUser as IUserRes } from '../model/types/userSchema';
import { USER_TAG, baseApi } from '@/shared/api';

export const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getUserById: builder.query<IUserRes, number>({
      query: id => ({
        url: `users/${id}`,
        method: 'GET',
      }),
      providesTags: [USER_TAG],
      // transformResponse: (response: { data: ILoginResponse; }, meta, arg) => response.data,
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
