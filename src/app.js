import 'normalize.css/normalize.css';
import React from 'react';
import 'react-dates/lib/css/_datepicker.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { setExpenses, Store } from './store';
import './styles/styles.scss';

const store = Store();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root-app'));

store.dispatch(setExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root-app'));
});
