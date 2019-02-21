// @flow
import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

export default routerMiddleware(history);
