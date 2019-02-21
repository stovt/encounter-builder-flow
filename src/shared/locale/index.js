// @flow
import sagaMiddleware from 'store/middleware/sagaMiddleware';
import reducerRegistry from 'store/reducerRegistry';
import sagas from './locale.sagas';
import reducer from './locale.reducer';
import LocaleProvider from './locale.provider';

reducerRegistry.register('locale', reducer);
sagaMiddleware.run(sagas);

export default LocaleProvider;
