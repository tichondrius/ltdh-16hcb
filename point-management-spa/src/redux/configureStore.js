import { applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules';
import rootSaga from './sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = composeWithDevTools({});
  const devToolMiddleware = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    autoRehydrate(),
  );

  const store = createStore(
    rootReducer,
    undefined,
    devToolMiddleware
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./modules/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }


  persistStore(
    store,
    { blacklist: ['ui', 'room', 'config'] });

  return store;
}
