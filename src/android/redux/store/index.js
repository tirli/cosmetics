import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../modules';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);
