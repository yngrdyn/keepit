import React from 'react';
import { connect } from 'react-redux';
import { ExpenseForm } from '../components';
import { editExpense, removeExpense } from '../store';

const removeItem = (id, dispatchFn, history) => {
  dispatchFn(id);
  history.push('/');
};

const editItem = (id, updates, dispatchFn, history) => {
  dispatchFn(id, updates);
  history.push('/');
};

export const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => editItem(props.expense.id, expense, props.editItem, props.history)}/>
      <button onClick={() => removeItem(props.expense.id, props.removeItem, props.history)}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  editItem: (id, updates) => dispatch(editExpense(id, updates)),
  removeItem: (id) => dispatch(removeExpense({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
