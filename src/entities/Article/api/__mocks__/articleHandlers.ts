import type { IArticle } from '../../model/types/articleSchema';

import { HttpResponse, http } from 'msw';
import { ENV } from '@/shared/config/enviroment/env';

export const articleHandlers = [
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, undefined, { data: IArticle[]; }>(`${ENV.API_ENDPOINT}/articles`, () => {
    const successResponseData: IArticle[] = [
      {
        id: 1,
        title: 'Crafting Forms in React: Vanilla vs. React Hook Form vs. Formik',
        imageUrl: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fet4anezpnili9dsjmgd6.png',
        views: 100,
        readTime: 5,
        categories: ['react', 'webdev', 'typescript', 'frontend'],
        createdAt: 1704123900000,
        blocks: [
          {
            id: 1,
            type: 'text',
            title: 'Title',
            paragraphs: [
              'When you are building apps using React, one day you will require user interaction by way of using forms. Be it for user signup, user login, newsletter subscription, or any other form of interaction.',
              'Building forms in React has its own challenges. There are so many moving parts:',
              'And for your forms to work, as you expect them to, then all these things have to be put in check.',
              'In this article, we shall explore how that can be done: one, by writing all the code ourselves to control the forms; and, two, by relying on external libraries to simplify building forms.',
            ],
          },
          {
            id: 2,
            type: 'image',
            url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--LVM_rUyx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://raw.githubusercontent.com/JosephMainaDev/react-form-libraries/main/public/newslettersignupform.png',
            title: 'Image title',
          },
          {
            id: 3,
            type: 'code',
            code: 'export default function VanillaForm() {\n\n  return (\n    <div>\n      <form id="newsletter-form" action="#" method="post">\n        <label htmlFor="name">Name:</label>\n        <input type="text" id="name" name="name" minlength="3" maxlength="20" required />\n\n        <label htmlFor="title">Title:</label>\n        <select id="title" name="title">\n          <option value="">Please choose a title</option>\n          <option value="sir">Sir</option>\n          <option value="madam">Madam</option>\n        </select>\n\n        <label htmlFor="email">Email:</label>\n        <input type="email" id="email" name="email" pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i" required />\n\n        <label htmlFor="message">Message:</label>\n        <textarea id="message" name="message" rows="5"></textarea>\n\n        <button type="submit">Submit</button>\n      </form>\n    </div>\n  );\n}\n',
          },
        ],
      },
    ];

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, undefined, { data: IArticle; }>(`${ENV.API_ENDPOINT}/article/:id`, () => {
    const successResponseData: IArticle = {
      id: 1,
      title: 'Crafting Forms in React: Vanilla vs. React Hook Form vs. Formik',
      imageUrl: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fet4anezpnili9dsjmgd6.png',
      views: 100,
      categories: ['react', 'webdev', 'typescript', 'frontend'],
      readTime: 5,
      createdAt: 1704123900000,
      blocks: [
        {
          id: 1,
          type: 'text',
          title: 'Title',
          paragraphs: [
            'When you are building apps using React, one day you will require user interaction by way of using forms. Be it for user signup, user login, newsletter subscription, or any other form of interaction.',
            'Building forms in React has its own challenges. There are so many moving parts:',
            'And for your forms to work, as you expect them to, then all these things have to be put in check.',
            'In this article, we shall explore how that can be done: one, by writing all the code ourselves to control the forms; and, two, by relying on external libraries to simplify building forms.',
          ],
        },
        {
          id: 2,
          type: 'image',
          url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--LVM_rUyx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://raw.githubusercontent.com/JosephMainaDev/react-form-libraries/main/public/newslettersignupform.png',
          title: 'Image title',
        },
        {
          id: 3,
          type: 'code',
          code: 'export default function VanillaForm() {\n\n  return (\n    <div>\n      <form id="newsletter-form" action="#" method="post">\n        <label htmlFor="name">Name:</label>\n        <input type="text" id="name" name="name" minlength="3" maxlength="20" required />\n\n        <label htmlFor="title">Title:</label>\n        <select id="title" name="title">\n          <option value="">Please choose a title</option>\n          <option value="sir">Sir</option>\n          <option value="madam">Madam</option>\n        </select>\n\n        <label htmlFor="email">Email:</label>\n        <input type="email" id="email" name="email" pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i" required />\n\n        <label htmlFor="message">Message:</label>\n        <textarea id="message" name="message" rows="5"></textarea>\n\n        <button type="submit">Submit</button>\n      </form>\n    </div>\n  );\n}\n',
        },
      ],
    };

    return HttpResponse.json({ data: successResponseData }, { status: 200 });
  }),
];
