import React from 'react';
import { ExpenseForm } from '../components';
import { addExpense } from '../store';
import { connect } from 'react-redux';

const createExpense = (expense, dispatchFn, history) => {
  dispatchFn(expense);
  history.push('/');
};

export const AddExpensePage = (props) => (
  <div>
    <h1>New Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => createExpense(expense, props.createExpense, props.history)}/>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  createExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);