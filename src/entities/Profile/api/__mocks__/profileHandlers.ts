import type { IProfile } from '../../model/types/profileSchema';

import { HttpResponse, http } from 'msw';
import { ENV } from '@/shared/config/enviroment/env';

export const profileHandlers = [
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, any, IProfile>(`${ENV.API_ENDPOINT}/profile/my`, () => {
    const successResponseData: IProfile = {
      id: 2,
      username: 'Pespatron',
      email: 'pespatron@gmail.com',
      city: 'Kyiv',
      country: 'Ukraine',
      currency: 'UAH',
      avatarUrl: 'https://static.espreso.tv/uploads/photobank/240000_241000/240133_photo5201982866597200294_new_960x380_0.webp',
      role: 'user',
    };

    return HttpResponse.json(successResponseData, { status: 200 });
  }),

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, any, IProfile>(`${ENV.API_ENDPOINT}/profile/:id`, () => {
    const successResponseData: IProfile = {
      id: 2,
      username: 'Pespatron',
      email: 'pespatron@gmail.com',
      city: 'Kyiv',
      country: 'Ukraine',
      currency: 'UAH',
      avatarUrl: 'https://static.espreso.tv/uploads/photobank/240000_241000/240133_photo5201982866597200294_new_960x380_0.webp',
      role: 'user',
    };

    return HttpResponse.json(successResponseData, { status: 200 });
  }),

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.patch<any, Partial<IProfile>, { data: IProfile; }>(`${ENV.API_ENDPOINT}/profile/:id`, () => {
    // const requestData = await request.json();

    const successResponseData: IProfile = {
      id: 2,
      username: 'Pespatron',
      email: 'pespatron@gmail.com',
      city: 'Kyiv',
      country: 'Ukraine',
      currency: 'UAH',
      avatarUrl: 'https://static.espreso.tv/uploads/photobank/240000_241000/240133_photo5201982866597200294_new_960x380_0.webp',
      role: 'user',
    };

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),
];
