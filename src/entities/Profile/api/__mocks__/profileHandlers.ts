import type { IProfile } from '../../model/types/profileSchema';

import { HttpResponse, http } from 'msw';
import { ENV } from '@/shared/config/enviroment/env';

export const profileHandlers = [
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, any, { data: IProfile; }>(`${ENV.API_ENDPOINT}/profile/my`, () => {
    const successResponseData: IProfile = {
      id: 1,
      username: 'Typicode',
      email: 'typicode@gmail.com',
      city: 'London',
      country: 'United Kingdom',
      currency: 'EUR',
      avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
      role: 'admin',
    };

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.patch<any, Partial<IProfile>, { data: IProfile; }>(`${ENV.API_ENDPOINT}/profile/:id`, () => {
    // const requestData = await request.json();

    const successResponseData: IProfile = {
      id: 1,
      username: 'Typicode',
      email: 'typicode@gmail.com',
      city: 'London',
      country: 'United Kingdom',
      currency: 'EUR',
      avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
      role: 'admin',
    };

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),
];
