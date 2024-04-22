import { HttpResponse, http } from 'msw';
import { ENV } from '@/shared/config/enviroment/env';

export const userHandlers = [
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, number>(`${ENV.API_ENDPOINT}/users/:id`, async ({ request }) => {
    const successResponseData = {
      id: '1',
      username: 'admin',
      isAuthenticated: true,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5vdCBHb29kIEZvciBZb3UiLCJpYXQiOjE1MTYyMzkwMjJ9.PuT8C27aM6eEWFws3c4Negisv_wWtmlT4Eg9Gn-IpnY',
      avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
      role: 'admin',
    };

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),
];
