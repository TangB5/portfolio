// get-dictionary.ts
import { Locale } from '@/app/i18n-config';
import 'server-only';


const dictionaries = {
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();