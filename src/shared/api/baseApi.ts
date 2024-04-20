import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithRetry } from './baseQuery';
import { ARTICLE_TAG, PROFILE_TAG, SESSION_TAG } from './tagTypes';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: [SESSION_TAG, PROFILE_TAG, ARTICLE_TAG],
  endpoints: () => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = baseApi
