// @flow
import type { LocaleAction, LocalePayload } from 'shared/types/locale';

export const LOAD_LOCALE = 'locale/LOAD_LOCALE';
export const LOAD_LOCALE_SUCCESS = 'locale/LOAD_LOCALE_SUCCESS';

export const loadLocale = (locale: string): LocaleAction => ({
  type: LOAD_LOCALE, locale
});
export const loadLocaleSuccess = (payload: LocalePayload): LocaleAction => ({
  type: LOAD_LOCALE_SUCCESS, payload
});
