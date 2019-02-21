// @flow
export type LocalePayload = {
  locale: string,
  messages: {
    [string]: string
  }
};

export type Locale = $ReadOnly<LocalePayload>;

export type LocaleState = {
  +locale: Locale
};

export type LocaleAction =
  | { type: 'locale/LOAD_LOCALE', locale: string }
  | { type: 'locale/LOAD_LOCALE_SUCCESS', payload: Locale };
