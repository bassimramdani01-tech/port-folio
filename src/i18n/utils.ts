import type { LocalePath } from '../content/types';
import { en } from './en';
import { fr } from './fr';
import { zh } from './zh';

export type TranslationTree<T> = {
  [Key in keyof T]: T[Key] extends string
    ? string
    : T[Key] extends object
      ? TranslationTree<T[Key]>
      : never;
};

export const translations = {
  en,
  fr,
  zh,
} satisfies Record<LocalePath, TranslationTree<typeof en>>;

export const htmlLangByLocale: Record<LocalePath, 'en' | 'fr' | 'zh-Hans'> = {
  en: 'en',
  fr: 'fr',
  zh: 'zh-Hans',
};

export function getTranslations(locale: LocalePath) {
  return translations[locale];
}

export function formatMessage(
  template: string,
  values: Readonly<Record<string, string | number>>,
): string {
  return template.replace(/\{([a-zA-Z][a-zA-Z0-9]*)\}/g, (_match, key: string) => {
    if (!Object.hasOwn(values, key)) {
      throw new Error(`Missing translation value for "${key}" in "${template}".`);
    }

    return String(values[key]);
  });
}
