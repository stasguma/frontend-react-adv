import type { IArticle } from '../../model/types/articleSchema';
import type { ArticleDto } from '../types';

import { HttpResponse, http } from 'msw';
import { ENV } from '@/shared/config/enviroment/env';

export const articleHandlers = [
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, undefined, ArticleDto>(`${ENV.API_ENDPOINT}/articles`, () => {
    const _links = {
      count: 2,
      current: 1,
      first: 'http://localhost:31299/api/articles?_limit=16&_page=1',
      last: 'http://localhost:31299/api/articles?_limit=16&_page=1',
      next: '',
      pages: 1,
      prev: null,
    };

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
            type: 'text',
            paragraphs: [
              'The newsletter signup form has only a few fields with simple data validation requirements.',
              'The form has two input elements (text and email), one select element (title of the user) and an optional message textarea element. The required data is validated using standard HTML validation rules.',
            ],
          },
          {
            id: 4,
            type: 'code',
            code: 'export default function VanillaForm() {\n\n  return (\n    <div>\n      <form id="newsletter-form" action="#" method="post">\n        <label htmlFor="name">Name:</label>\n        <input type="text" id="name" name="name" minlength="3" maxlength="20" required />\n\n        <label htmlFor="title">Title:</label>\n        <select id="title" name="title">\n          <option value="">Please choose a title</option>\n          <option value="sir">Sir</option>\n          <option value="madam">Madam</option>\n        </select>\n\n        <label htmlFor="email">Email:</label>\n        <input type="email" id="email" name="email" pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i" required />\n\n        <label htmlFor="message">Message:</label>\n        <textarea id="message" name="message" rows="5"></textarea>\n\n        <button type="submit">Submit</button>\n      </form>\n    </div>\n  );\n}\n',
          },
        ],
      },
      {
        id: 2,
        title: 'Build and deploy a REST API with Postgres database in TypeScript',
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1116/1*jsib4jXQbvt-JKglw2an2g.png',
        views: 200,
        readTime: 7,
        categories: ['webdev', 'cloud', 'typescript', 'typesafe'],
        createdAt: 1704212520000,
        blocks: [
          {
            id: 1,
            type: 'text',
            paragraphs: [
              'In this tutorial you will create a REST API for a URL Shortener service using Encore for TypeScript, a new way of building fully type-safe and production-ready distributed systems in TypeScript using declarative infrastructure.',
              'With Encore you can declare infrastructure like databases, Pub/Sub, cron jobs, and caches, directly in your application code. Encore takes care of running your local environment, instruments your app with tracing, and automatically provisions and deploys to your cloud in AWS/GCP.',
              'In a few short minutes, you\'ll learn how to:',
            ],
          },
          {
            id: 2,
            type: 'text',
            title: 'Create a service and endpoint',
            paragraphs: [
              'Create a new application by running encore app create and select Empty app as the template.',
              'Now let\'s create a new url service.',
              'In your application\'s root folder, create a new folder url and create a new file url.ts that looks like this:',
            ],
          },
          {
            id: 3,
            type: 'code',
            code: 'import { api } from "encore.dev/api";\nimport { randomBytes } from "node:crypto";\n\ninterface URL {\n  id: string; // short-form URL id\n  url: string; // complete URL, in long form\n}\n\ninterface ShortenParams {\n  url: string; // the URL to shorten\n}\n\n// Shortens a URL.\nexport const shorten = api(\n  { method: "POST", path: "/url", expose: true },\n  async ({ url }: ShortenParams): Promise<URL> => {\n    const id = randomBytes(6).toString("base64url");\n    return { id, url };\n  },\n);\n',
          },
          {
            id: 4,
            type: 'text',
            title: 'Save URLs in a database',
            paragraphs: [
              'So the API works, but there\'s just one problem...',
              'Right now, we’re not actually storing the URL anywhere. That means we can generate shortened IDs but there’s no way to get back to the original URL! We need to store a mapping from the short ID to the complete URL.',
              'Happily, Encore makes it very simple to set up a PostgreSQL database to store our data. To do so, we first define a database schema, in the form of a migration file.',
            ],
          },
          {
            id: 5,
            type: 'image',
            url: 'https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7cawb0wu23bj6xxc30jv.png',
          },
        ],
      },
    ];

    return HttpResponse.json({ results: successResponseData, _link: _links }, { status: 200 });
  }),
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  http.get<any, undefined, IArticle>(`${ENV.API_ENDPOINT}/articles/:id`, () => {
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

    return HttpResponse.json(successResponseData, { status: 200 });
  }),
];
