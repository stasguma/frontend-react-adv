import type { IProfile } from '../model/types/profileSchema';
import { PROFILE_TAG, baseApi } from '@/shared/api';

export const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    myProfile: builder.query<IProfile, void>({
      query: () => ({
        url: `profile/my`,
        method: 'GET',
      }),
      providesTags: [PROFILE_TAG],
    }),
    profile: builder.query<IProfile, number>({
      query: id => ({
        url: `profile/${id}`,
        method: 'GET',
      }),
      providesTags: [PROFILE_TAG],
    }),
    updateProfile: builder.mutation<IProfile, Partial<IProfile>>({
      query: data => ({
        url: `profile/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: [PROFILE_TAG],
      // transformResponse: (response: { data: IProfile; }, meta, arg) => response.data,
    }),
  }),
});

export const { useMyProfileQuery, useProfileQuery, useUpdateProfileMutation } = profileApi;
