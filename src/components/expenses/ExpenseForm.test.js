import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from './ExpenseForm';
import expenses from '../../fixtures/expenses';

describe('ExpenseForm', () => {
	it('should render ExpenseForm correctly', () => {
		const wrapper = shallow(<ExpenseForm/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('should render ExpenseForm correctly with data', () => {
		const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
		expect(wrapper).toMatchSnapshot();
	});
});
