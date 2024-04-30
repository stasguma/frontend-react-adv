import '@testing-library/jest-dom/vitest';
import { server } from './mocks/server';
// import { cleanup } from '@testing-library/react';
// @ts-ignore
window.__IS_DEV__ = true;

vi.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

afterAll(() => server.close());
beforeAll(() => server.listen({
  onUnhandledRequest(request) {
    console.log('Unhandled %s %s', request.method, request.url);
  },
}));
afterEach(() => server.resetHandlers());
