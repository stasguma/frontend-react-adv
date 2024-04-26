import type { IComment } from '../../model/types/commentSchema';

import { HttpResponse, http } from 'msw';
import { ENV } from '@/shared/config/enviroment/env';

export const commentHandlers = [
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, undefined, { data: IComment[]; }>(`${ENV.API_ENDPOINT}/comments`, ({ request }) => {
    const url = new URL(request.url);

    const articleId = url.searchParams.get('articleId');

    if (Boolean(articleId) === false) {
      return HttpResponse.json(null, { status: 404 });
    }

    const successResponseData: IComment[] = [
      {
        id: 1,
        text: 'a comment about post 1',
        articleId: 1,
        userId: 1,
        createdAt: new Date().getTime(),
        user: {
          id: 1,
          username: 'admin',
          avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
          role: 'admin',
        },
      },
      {
        id: 2,
        text: 'another comment about post 1',
        articleId: 1,
        userId: 1,
        createdAt: new Date().getTime(),
        user: {
          id: 1,
          username: 'admin',
          avatarUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
          role: 'admin',
        },
      },
    ];

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.post<any, IComment, { data: IComment[]; }>(`${ENV.API_ENDPOINT}/comments`, async ({ request }) => {
    const reqBody = await request.json();
    console.log('reqBody', reqBody);
    const successResponseData: IComment[] = [
      {
        id: '1',
        text: 'a comment about post 1',
        articleId: '1',
        userId: '1',
      },
    ];

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),
];
