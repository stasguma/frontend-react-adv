import { lazy } from 'react';

/* eslint-disable-next-line */
const AboutPageAsync = lazy(() => import("./ui/AboutPage"));

export { AboutPageAsync as AboutPage };
