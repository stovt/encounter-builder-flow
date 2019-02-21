// @flow
import { call, put, takeEvery } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { flattenObject } from 'shared/helpers';
import { LOAD_LOCALE, loadLocaleSuccess } from './locale.actions';

const fetchLocale = (locale: string) => fetch(`/data/locales/${locale}.json`)
  .then(res => res.json());

function* localeLoader(action: { locale: string }): Saga<void> {
  const messages: {} = yield call(fetchLocale, action.locale);
  yield put(loadLocaleSuccess({
    locale: action.locale,
    messages: flattenObject(messages)
  }));
}

export default function* (): Saga<void> {
  yield takeEvery(LOAD_LOCALE, localeLoader);
}
