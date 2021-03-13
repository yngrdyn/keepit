import React from 'react';
import { connect } from 'react-redux';
import { getVisibleExpenses } from '../store';

const ExpenseList = (props) => {
  const visibleExpenses = getVisibleExpenses(props.expenses, props.filters);

  return (
    <div>
      <h2>Expense List</h2>
      { visibleExpenses.length }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  }
};

export default connect(mapStateToProps)(ExpenseList);
