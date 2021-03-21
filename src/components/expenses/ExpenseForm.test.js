import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from './ExpenseForm';
import expenses from '../../fixtures/expenses';
import moment from 'moment';

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
		// given
		const wrapper = shallow(<ExpenseForm />);
		expect(wrapper).toMatchSnapshot();
		// when
		wrapper.find('form').simulate('submit',{
			preventDefault: () => {},
		});
		// then
		expect(wrapper.state('error').length)
			.toBeGreaterThan(0);
		expect(wrapper).toMatchSnapshot();
	});

	it('should set description on input change', () => {
		// given
		const value = 'New fancy description value';
		const wrapper = shallow(<ExpenseForm />);
		// when
		wrapper.find('input').at(0).simulate('change', {
			target: { value },
		});
		// then
		expect(wrapper.state('description'))
			.toBe(value);
	});

	it('should set note on textarea change', () => {
		// given
		const value = 'New fancy note value';
		const wrapper = shallow(<ExpenseForm />);
		// when
		wrapper.find('textarea').at(0).simulate('change', {
			target: { value },
		});
		// then
		expect(wrapper.state('note'))
			.toBe(value);
	});

	it('should set amount if valid input', () => {
		// given
		const value = '23.50';
		const wrapper = shallow(<ExpenseForm />);
		// when
		wrapper.find('input').at(1).simulate('change', {
			target: { value },
		});
		// then
		expect(wrapper.state('amount'))
			.toBe(value);
	});

	it('should not set amount if invalid', () => {
		// given
		const value = '12.122';
		const wrapper = shallow(<ExpenseForm />);
		// when
		wrapper.find('input').at(1).simulate('change', {
			target: { value },
		});
		// then
		expect(wrapper.state('amount'))
			.toBe('');
	});

	it('should call onSubmit prop for valid form submission', () => {
		// given
		const onSubmitSpy = jest.fn();
		const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
		// when
		wrapper.find('form').simulate('submit', {
			preventDefault: () => {},
		});
		// then
		expect(wrapper.state('error'))
			.toBeFalsy();
		expect(onSubmitSpy).toHaveBeenCalledWith({
			description: expenses[0].description,
			amount: expenses[0].amount,
			note: expenses[0].note,
			createdAt: expenses[0].createdAt,
		});
	});

	it('should set new date on date change', () => {
		// given
		const now = moment();
		const wrapper = shallow(<ExpenseForm/>);
		// when
		wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
		// then
		expect(wrapper.state('createdAt'))
			.toEqual(now);
	});

	it('should set datePickerFocused on focus', () => {
		// given
		const focused = true;
		const wrapper = shallow(<ExpenseForm/>);
		// when
		wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
		// then
		expect(wrapper.state('datePickerFocused'))
			.toBe(focused);
	});
});
