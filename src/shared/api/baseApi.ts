import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithRetry } from './baseQuery';
import { ARTICLE_TAG, COMMENT_TAG, PROFILE_TAG, SESSION_TAG } from './tagTypes';

const tagTypes = [SESSION_TAG, PROFILE_TAG, ARTICLE_TAG, COMMENT_TAG];

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithRetry,
  tagTypes,
  endpoints: () => ({}),
});
