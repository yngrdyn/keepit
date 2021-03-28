import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
