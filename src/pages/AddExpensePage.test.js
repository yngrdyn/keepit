import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from './AddExpensePage';
import expenses from '../fixtures/expenses';

describe('AddExpensePage', () => {
	let createExpense, history, wrapper;

	beforeEach(() => {
		createExpense = jest.fn();
		history = {
			push: jest.fn(),
		};
		wrapper = shallow(<AddExpensePage createExpense={createExpense} history={history} />);
	});

	it('should render addExpensePage correctly', () => {
		expect(wrapper)
			.toMatchSnapshot();
	});

	it('should handle onSubmit', () => {
		// when
		wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
		// then
		expect(history.push)
			.toHaveBeenCalledWith('/');
		expect(createExpense)
			.toHaveBeenCalledWith(expenses[1]);
	});
});
