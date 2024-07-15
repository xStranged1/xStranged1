import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from './locales/es/translation.json'
import translationEN from './locales/en/translation.json'

import translationDE from './locales/de/translation.json'
import translationFR from './locales/fr/translation.json'
import translationIT from './locales/it/translation.json'
import translationRU from './locales/ru/translation.json'

// Traducciones
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },

  de: {
    translation: translationDE
  },
  fr: {
    translation: translationFR
  },
  it: {
    translation: translationIT
  },
  ru: {
    translation: translationRU
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;