// @flow
import type { Locale } from 'shared/types/locale';
import type { Action } from 'shared/types';
import { flattenObject } from 'shared/helpers';
import enLocale from 'public/data/locales/en.json';
import { LOAD_LOCALE_SUCCESS } from './locale.actions';

const initialState: Locale = {
  locale: 'en',
  messages: flattenObject(enLocale)
};

const localeReducer = (state: Locale = initialState, action: Action): Locale => {
  switch (action.type) {
    case LOAD_LOCALE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default localeReducer;
