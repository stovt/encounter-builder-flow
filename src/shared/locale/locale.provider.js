// @flow
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import type { State } from 'shared/types';
import { localeSelector, messagesSelector } from './locale.selectors';

addLocaleData(ruLocaleData);

const mapStateToProps = (state: State) => ({
  locale: localeSelector(state),
  messages: messagesSelector(state)
});

export default connect(mapStateToProps)(IntlProvider);
