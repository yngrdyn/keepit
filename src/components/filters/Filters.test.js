import React from 'react';
import { shallow } from 'enzyme';
import { Filters } from './Filters';
import { filters, altFilters } from '../../fixtures/filters.js';

describe('EditExpensePage', () => {
	let setTextFilters, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

	beforeEach(() => {
		setTextFilters = jest.fn();
		sortByDate = jest.fn();
  	sortByAmount = jest.fn();
  	setStartDate = jest.fn();
  	setEndDate = jest.fn();
		wrapper = shallow(
			<Filters
				setTextFilters={setTextFilters}
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
});
