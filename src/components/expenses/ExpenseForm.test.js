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

	it('should render error for invalid form submission', () => {
		const wrapper = shallow(<ExpenseForm />);
		expect(wrapper).toMatchSnapshot();
		wrapper.find('form').simulate('submit',{
			preventDefault: () => {},
		});
		expect(wrapper.state('error').length)
			.toBeGreaterThan(0);
		expect(wrapper).toMatchSnapshot();
	});

	it('should set description on input change', () => {
		const value = 'New fancy description value';
		const wrapper = shallow(<ExpenseForm />);
		wrapper.find('input').at(0).simulate('change', {
			target: { value },
		});
		expect(wrapper.state('description'))
			.toBe(value);
	});

	it('should set note on textarea change', () => {
		const value = 'New fancy note value';
		const wrapper = shallow(<ExpenseForm />);
		wrapper.find('textarea').at(0).simulate('change', {
			target: { value },
		});
		expect(wrapper.state('note'))
			.toBe(value);
	});

	it('should set amount if valid input', () => {
		const value = '23.50';
		const wrapper = shallow(<ExpenseForm />);
		wrapper.find('input').at(1).simulate('change', {
			target: { value },
		});
		expect(wrapper.state('amount'))
			.toBe(value);
	});

	it('should not set amount if invalid', () => {
		const value = '12.122';
		const wrapper = shallow(<ExpenseForm />);
		wrapper.find('input').at(1).simulate('change', {
			target: { value },
		});
		expect(wrapper.state('amount'))
			.toBe('');
	});
});
