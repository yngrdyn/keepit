import React from 'react';
import { shallow } from 'enzyme';
import Expense from './Expense';
import expenses from '../../fixtures/expenses';

describe('Expense', () => {
  it('should render Expense correctly', () => {
    const wrapper = shallow(<Expense {...expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
