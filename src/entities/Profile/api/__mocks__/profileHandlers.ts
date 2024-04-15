import type { IProfile } from '../../model/types/profileSchema';

import { HttpResponse, http } from 'msw';
import { ENV } from '@/shared/config/enviroment/env';

export const profileHandlers = [
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, any>(`${ENV.API_ENDPOINT}/profile`, () => {
    const successResponseData = {
      username: 'Typicode',
      email: 'typicode@gmail.com',
      city: 'London',
      country: 'United Kingdom',
      currency: 'EUR',
      avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
    };

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),

  http.patch<IProfile, Partial<IProfile>>(`${ENV.API_ENDPOINT}/profile`, async ({ request }) => {
    const requestData = await request.json();

    const successResponseData = {
      ...requestData,
      avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
    };

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),
];
