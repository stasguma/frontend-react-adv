import type { IComment } from '../../model/types/commentSchema';

import { HttpResponse, http } from 'msw';
import { ENV } from '@/shared/config/enviroment/env';

export const commentHandlers = [
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, undefined, { data: IComment[]; }>(`${ENV.API_ENDPOINT}/comments?articleId=:id`, () => {
    const successResponseData = [
      {
        id: '1',
        text: 'a comment about post 1',
        articleId: '1',
        userId: '1',
      },
      {
        id: '2',
        text: 'another comment about post 1',
        articleId: '1',
        userId: '1',
      },
    ];

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.post<any, IComment, { data: IComment[]; }>(`${ENV.API_ENDPOINT}/comments`, async ({ request }) => {
    const reqBody = await request.json();
    console.log('reqBody', reqBody);
    const successResponseData = [
      {
        id: '1',
        text: 'a comment about post 1',
        articleId: '1',
        userId: '1',
      },
      {
        id: '2',
        text: 'another comment about post 1',
        articleId: '1',
        userId: '1',
      },
    ];

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),
];
