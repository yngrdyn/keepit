import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../../store';

const removeItem = (id, dispatchFn) => {
  dispatchFn(removeExpense({ id }));
};

const Expense = ({ id, description, amount, createdAt, dispatch }) => (
    <div>
      <h3> { description } </h3>
      <div> { amount } -  { createdAt } </div>
      <button onClick={() => removeItem(id, dispatch)}>Remove</button>
    </div>
  );

export default connect()(Expense);
