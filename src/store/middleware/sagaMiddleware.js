// @flow
import createSagaMiddleware from 'redux-saga';
import type { SagaMiddleware } from 'redux-saga';

const sagaMiddleware: SagaMiddleware<*> = createSagaMiddleware();

export default sagaMiddleware;
