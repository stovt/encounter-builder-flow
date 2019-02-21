// @flow
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import noLocaleData from 'react-intl/locale-data/no';
import type { State } from 'shared/types';
import { localeSelector, messagesSelector } from './locale.selectors';

addLocaleData(noLocaleData);

const mapStateToProps = (state: State) => ({
  locale: localeSelector(state),
  messages: messagesSelector(state)
});

export default connect(mapStateToProps)(IntlProvider);
