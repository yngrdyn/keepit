import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { addExpense, editExpense, removeExpense, setTextFilter, sortByAmount, sortByDate, Store, setEndDate, setStartDate } from './store';
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
store.dispatch(setTextFilter('rent'));
console.log(store.getState());
store.dispatch(setTextFilter());
console.log(store.getState());
store.dispatch(sortByAmount());
console.log(store.getState());
store.dispatch(sortByDate());
console.log(store.getState());
store.dispatch(setStartDate(25));
console.log(store.getState());
store.dispatch(setEndDate(50));
console.log(store.getState());

ReactDOM.render(<AppRouter/>, document.getElementById('root-app'));
