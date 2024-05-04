import type { ILoginRequest } from '../types';

import { HttpResponse, http } from 'msw';
import { ENV } from '@/shared/config/enviroment/env';

export const sessionHandlers = [
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.post<any, ILoginRequest>(`${ENV.API_ENDPOINT}/login`, async ({ request }) => {
    const { username, password } = await request.json();

    const successResponseData = {
      id: '1',
      isAuthenticated: true,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5vdCBHb29kIEZvciBZb3UiLCJpYXQiOjE1MTYyMzkwMjJ9.PuT8C27aM6eEWFws3c4Negisv_wWtmlT4Eg9Gn-IpnY',
      username: 'admin',
    };
    const errorResponseData = { error: 'Unauthorized', message: 'User was not found' };

    if (username === 'admin' && password !== 'supadupapass') {
      return HttpResponse.json({ error: errorResponseData }, { status: 403 });
    }

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),
];
