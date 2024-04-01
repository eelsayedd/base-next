import { useState, useEffect } from 'react';
import i18n from 'i18next';

/**
 * Custom hook to manage language changes, setting a default language in localStorage
 * if one isn't already set, and defaulting to English if null.
 * @param {string} defaultLang The default language to use if none is set in localStorage. Defaults to 'en'.
 * @returns {{ language: string; changeLanguage: (lang: string) => void; }} Object containing the current language and a function to change the language.
 */
const useLanguage = (defaultLang: string = 'en'): { language: string; changeLanguage: (lang: string) => void; } => {
  const [language, setLanguage] = useState<string>(defaultLang);

  useEffect(() => {
    const storedLang: string | null = localStorage.getItem('i18nextLng');
    if (!storedLang) {
      localStorage.setItem('i18nextLng', defaultLang);
      i18n.changeLanguage(defaultLang);
    } else {
      i18n.changeLanguage(storedLang);
    }
    setLanguage(localStorage.getItem('i18nextLng') || defaultLang);
    document.documentElement.dir = (localStorage.getItem('i18nextLng') === 'ar' ? 'rtl' : 'ltr');
  }, [defaultLang]);

  const changeLanguage = (lang: string) => {
    localStorage.setItem('i18nextLng', lang);
    i18n.changeLanguage(lang);
    setLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  return { language, changeLanguage };
};

export default useLanguage;
