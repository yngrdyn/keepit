import React from 'react';
import { connect } from 'react-redux';
import { getVisibleExpenses } from '../../store';
import Expense from './Expense';

export const ExpenseList = ({ expenses }) => (
  <div>
    <h2>Expense List</h2>
    {
      expenses.length === 0
      ? <p>No expenses.</p>
      : (expenses.map((expense) =>
          <Expense key={expense.id} {...expense}></Expense>
        )
      )
    }
  </div>
);

const mapStateToProps = ({expenses, filters}) => {
  return {
    expenses: getVisibleExpenses(expenses, filters),
  }
};

export default connect(mapStateToProps)(ExpenseList);
