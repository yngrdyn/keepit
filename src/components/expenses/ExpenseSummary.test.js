import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from './ExpenseSummary';

describe('Expense Summary', () => {
  it('should render ExpenseSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary count={1} total={289}/>);
    expect(wrapper).toMatchSnapshot();
  });

	it('should render ExpenseSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary count={12} total={28948282}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
