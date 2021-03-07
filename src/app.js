import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import { addExpense, Store } from './store';

const store = Store();
store.dispatch(addExpense({ description: 'TESTING' }));
console.log(store.getState());

ReactDOM.render(<AppRouter/>, document.getElementById('root-app'));
