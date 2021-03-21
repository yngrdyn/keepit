import React from 'react';
import { shallow } from 'enzyme';
import { Filters } from './Filters';
import { filters, altFilters } from '../../fixtures/filters.js';

describe('EditExpensePage', () => {
	let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

	beforeEach(() => {
		setTextFilter = jest.fn();
		sortByDate = jest.fn();
  	sortByAmount = jest.fn();
  	setStartDate = jest.fn();
  	setEndDate = jest.fn();
		wrapper = shallow(
			<Filters
				setTextFilter={setTextFilter}
				sortByDate={sortByDate}
				sortByAmount={sortByAmount}
				setStartDate={setStartDate}
				setEndDate={setEndDate}
				filters={filters} />
		);
	});

	it('should render Filters correctly', () => {
		expect(wrapper)
			.toMatchSnapshot();
	});

	it('should render Filters with alt data correctly', () => {
		wrapper.setProps({filters: altFilters});

		expect(wrapper)
			.toMatchSnapshot();
	});

	it('should handle text change', () => {
		// given
		const value = 'My fancy text';
		// when
		wrapper.find('input').simulate('change', { target: { value }});
		// then
		expect(setTextFilter)
			.toHaveBeenCalledWith(value);
	});

	it('should sort by date', () => {
		// given
		wrapper.setProps({filters: altFilters});
		const value = 'date';
		// when
		wrapper.find('select').simulate('change', { target: { value }});
		// then
		expect(sortByDate)
			.toHaveBeenCalled();
	});

	it('should sort by amount', () => {
		// given
		const value = 'amount';
		// when
		wrapper.find('select').simulate('change', { target: { value }});
		// then
		expect(sortByAmount)
			.toHaveBeenCalled();
	});

	it('should handle date changes', () => {
		// given
		const startDate = altFilters.startDate;
		const endDate = altFilters.endDate;
		// when
		wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
		// then
		expect(setStartDate)
			.toHaveBeenCalledWith(startDate);
		expect(setEndDate)
			.toHaveBeenCalledWith(endDate);
	});

	it('should handle date focus changes', () => {
		// given
		const calendarFocused = 'endDate';
		// when
		wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
		// then
		expect(wrapper.state('calendarFocused'))
			.toBe(calendarFocused);
	});
});
