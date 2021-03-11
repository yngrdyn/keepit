import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { addExpense, editExpense, removeExpense, Store } from './store';
import './styles/styles.scss';

const store = Store();
console.log(store.getState());
const expenseOne = store.dispatch(addExpense({ description: 'TESTING' }));
const expenseTwo = store.dispatch(addExpense({ description: 'TESTING 2' }));
console.log(store.getState());
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
console.log(store.getState());
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 5400}))
console.log(store.getState());

ReactDOM.render(<AppRouter/>, document.getElementById('root-app'));
