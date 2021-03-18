import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from './ExpenseList';
import expenses from '../../fixtures/expenses';

describe('ExpenseList', () => {
  it('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
