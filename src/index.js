// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import BreakpointListener from './shared/components/BreakpointListener';
import { GlobalStyles, theme } from './styles';
import { history } from './store/middleware/routerMiddleware';
import store from './store/createStore';
import LocaleProvider from './shared/locale';
import App from './App';
import * as serviceWorker from './serviceWorker';

const renderRoot = document.getElementById('root');

if (renderRoot) {
  ReactDOM.render(
    <Provider store={store}>
      <LocaleProvider>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <BreakpointListener>
              <>
                <GlobalStyles />
                <App />
              </>
            </BreakpointListener>
          </ThemeProvider>
        </ConnectedRouter>
      </LocaleProvider>
    </Provider>,
    renderRoot,
  );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
