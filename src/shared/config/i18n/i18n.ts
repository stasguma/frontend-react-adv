import type { HttpBackendOptions } from 'i18next-http-backend';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

/* eslint-disable-next-line */
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init<HttpBackendOptions>({
    fallbackLng: 'en',
    debug: __IS_DEV__,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      // loadPath: __IS_DEV__ ? '/locales/{{lng}}/{{ns}}.json' : '/public/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
