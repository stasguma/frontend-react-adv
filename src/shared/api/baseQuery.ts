import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@/app/providers/store';

import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { ENV } from '@/shared/config/enviroment/env';

const baseQuery = fetchBaseQuery({
  baseUrl: ENV.API_ENDPOINT,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).session.data?.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const baseQueryWithDelay = function (delay = 500): BaseQueryFn {
  return async (args, api, extraOptions) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */
    return baseQuery(args, api, extraOptions);
  };
};
