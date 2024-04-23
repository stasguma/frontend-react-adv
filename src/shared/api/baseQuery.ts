import type { RootState } from '@/app/providers/store';

import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { ENV } from '@/shared/config/enviroment/env';

const baseQuery = fetchBaseQuery({
  baseUrl: ENV.API_ENDPOINT,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).session.data?.token;
    if (token) {
      headers.set('authentication', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });
