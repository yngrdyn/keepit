import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { addExpense, getVisibleExpenses, Store } from './store';
import './styles/styles.scss';
import { Provider } from 'react-redux';

const store = Store();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill'}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root-app'));
