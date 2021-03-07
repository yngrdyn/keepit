import { createStore } from 'redux';
import reducers from './Reducers';

export default () => {
  const store = createStore(
    reducers
  );

  return store;
}
