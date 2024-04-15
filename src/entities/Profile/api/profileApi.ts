import type { IProfile } from '../model/types/profileSchema';
import { PROFILE_TAG, baseApi } from '@/shared/api';

export const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    profile: builder.query<IProfile, void>({
      query: () => ({
        url: `profile`,
        method: 'GET',
      }),
      providesTags: [PROFILE_TAG],
      // transformResponse: (response: { data: IProfile; }, meta, arg) => response.data,
    }),
    updateProfile: builder.mutation<IProfile, Partial<IProfile>>({
      query: data => ({
        url: `profile`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: [PROFILE_TAG],
      // transformResponse: (response: { data: IProfile; }, meta, arg) => response.data,
    }),
  }),
});

export const { useProfileQuery, useUpdateProfileMutation } = profileApi;
