import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Store } from './store';
import './styles/styles.scss';

const store = Store();

store.subscribe(() => {
  console.log(visibleExpenses);
});

ReactDOM.render(<AppRouter/>, document.getElementById('root-app'));
