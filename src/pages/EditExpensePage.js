import React from 'react';
import { connect } from 'react-redux';
import { ExpenseForm } from '../components';
import { editExpense, removeExpense } from '../store';

const removeItem = (id, dispatchFn, history) => {
  dispatchFn(removeExpense({ id }));
  history.push('/');
};

const editItem = (id, updates, dispatchFn, history) => {
  dispatchFn(editExpense(id, updates));
  history.push('/');
};

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => editItem(props.match.params.id, expense, props.dispatch, props.history)}/>
      <button onClick={() => removeItem(props.match.params.id, props.dispatch, props.history)}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id),
  }
};

export default connect(mapStateToProps)(EditExpensePage);
