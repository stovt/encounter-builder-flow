// @flow
import type { State } from 'shared/types';
import type { LocalePayload } from 'shared/types/locale';

export const localeSelector = (state: State): string => state.locale.locale;
export const messagesSelector = (state: State): $PropertyType<LocalePayload, 'messages'> => state.locale.messages;
