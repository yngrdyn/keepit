import React from 'react';
import { connect } from 'react-redux';
import { getVisibleExpenses, getExpensesTotal } from '../../store';
import numeral from 'numeral';

export const ExpenseSummary = ({ count, total }) => (
	<p>
		Viewing {count} { count === 1 ? 'expense' : 'expenses' } totalling { numeral(total/100).format('$0,0.00') }
	</p>
);

const mapStateToProps = ({expenses, filters}) => {
	const visibleExpenses = getVisibleExpenses(expenses, filters);

  return {
    count: visibleExpenses.length,
		total: getExpensesTotal(visibleExpenses),
  }
};

export default connect(mapStateToProps)(ExpenseSummary);
