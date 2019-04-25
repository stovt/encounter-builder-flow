// @flow
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import config from 'config';

export const history = createBrowserHistory({ basename: config.PUBLIC_URL });

export default routerMiddleware(history);
