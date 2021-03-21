import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from './EditExpensePage';
import expenses from '../fixtures/expenses';

describe('EditExpensePage', () => {
	let editItem, removeItem, history, wrapper;

	beforeEach(() => {
		editItem = jest.fn();
		removeItem = jest.fn();
		history = {
			push: jest.fn(),
		};
		wrapper = shallow(<EditExpensePage editItem={editItem} removeItem={removeItem} history={history} expense={expenses[2]}/>);
	});

	it('should render EditExpensePage correctly', () => {
		expect(wrapper)
			.toMatchSnapshot();
	});

	it('should handle editExpense', () => {
		// when
		wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
		// then
		expect(history.push)
			.toHaveBeenCalledWith('/');
		expect(editItem)
			.toHaveBeenCalledWith(expenses[2].id, expenses[2]);
	});

	it('should handle removeExpense', () => {
		// when
		wrapper.find('button').simulate('click');
		// then
		expect(history.push)
			.toHaveBeenCalledWith('/');
		expect(removeItem)
			.toHaveBeenCalledWith(expenses[2].id);
	});
});
