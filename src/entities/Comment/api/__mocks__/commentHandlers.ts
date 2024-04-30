import type { IComment } from '../../model/types/commentSchema';

import { HttpResponse, http } from 'msw';
import { ENV } from '@/shared/config/enviroment/env';

export const commentHandlers = [
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, undefined, IComment[]>(`${ENV.API_ENDPOINT}/comments`, ({ request }) => {
    const url = new URL(request.url);

    const articleId = url.searchParams.get('articleId');

    if (Boolean(articleId) === false) {
      return HttpResponse.json(null, { status: 404 });
    }

    const successResponseData: IComment[] = [
      {
        id: 1,
        text: 'Subgrid is an extremely useful feature of grids that allows grid items to have a grid of their own that inherits grid lines from the parent grid.',
        articleId: 1,
        userId: 1,
        user: {
          id: 1,
          username: 'admin',
          avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
          role: 'admin',
          email: 'supaadmin@gmail.com',
          city: 'London',
          country: 'United Kingdom',
          currency: 'EUR',
        },
        createdAt: 1704124900000,
      },
      {
        id: 2,
        text: 'Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container.',
        articleId: 1,
        userId: 1,
        user: {
          id: 1,
          username: 'admin',
          avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
          role: 'admin',
          email: 'supaadmin@gmail.com',
          city: 'London',
          country: 'United Kingdom',
          currency: 'EUR',
        },
        createdAt: 1704213520000,
      },
      {
        id: 3,
        text: 'Specifies the size of any auto-generated grid tracks (aka implicit grid tracks). Implicit tracks get created when there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid.',
        articleId: 1,
        userId: 2,
        user: {
          id: 2,
          username: 'pespatron',
          avatarUrl: 'https://static.espreso.tv/uploads/photobank/240000_241000/240133_photo5201982866597200294_new_960x380_0.webp',
          role: 'user',
          email: 'pespatron@gmail.com',
          city: 'Kyiv',
          country: 'Ukraine',
          currency: 'UAH',
        },
        createdAt: 1704126900000,
      },
    ];

    return HttpResponse.json(successResponseData, { status: 200 });
  }),
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.post<any, IComment, IComment>(`${ENV.API_ENDPOINT}/comments`, async ({ request }) => {
    const reqBody = await request.json();

    return HttpResponse.json(reqBody, { status: 201 });
  }),
];
