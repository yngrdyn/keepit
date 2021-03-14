import React from 'react';
import { ExpenseForm } from '../components';
import { addExpense } from '../store';
import { connect } from 'react-redux';

const createExpense = (expense, dispatchFn, history) => {
  dispatchFn(addExpense(expense));
  history.push('/');
};

const AddExpensePage = (props) => (
  <div>
    <h1>New Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => createExpense(expense, props.dispatch, props.history)}/>
  </div>
);

export default connect()(AddExpensePage);