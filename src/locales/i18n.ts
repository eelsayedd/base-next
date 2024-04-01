// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend'; // Consider replacing with HttpBackend if possible, as XHR is outdated
import translationEng from './en.json';
import translationAr from './ar.json';

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};

// Setting direction must be handled client-side
if (typeof window !== 'undefined') {
  const dir = localStorage.getItem('i18nextLng') === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;

  if (localStorage.getItem('i18nextLng') === undefined) {
    localStorage.setItem('i18nextLng', dir === 'ltr' ? 'en' : 'ar');
  }
}

i18n
  .use(XHR) // Note: Consider using i18next-http-backend instead
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    load: 'languageOnly',
    detection: DETECTION_OPTIONS,
    lng:
      typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : 'en', // Default to 'en' on the server-side
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    resources: {
      en: {
        translations: translationEng
      },
      ar: {
        translations: translationAr
      }
    },
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations'
  });

export default i18n;
