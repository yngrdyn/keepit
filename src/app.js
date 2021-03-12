import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { addExpense, editExpense, removeExpense, setTextFilter, sortByAmount, sortByDate, Store, setEndDate, setStartDate, getVisibleExpenses } from './store';
import './styles/styles.scss';

const store = Store();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'TESTING', amount: 100, createdAt: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'TESTING 2', amount: 56, createdAt: 200 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 5400}))

// store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter('2'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(25));
store.dispatch(setEndDate(150));

ReactDOM.render(<AppRouter/>, document.getElementById('root-app'));
