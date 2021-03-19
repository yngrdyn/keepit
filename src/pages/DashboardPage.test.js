import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from './DashboardPage';

describe('DashboardPage', () => {
  it('should render Expense correctly', () => {
    const wrapper = shallow(<DashboardPage/>);
    expect(wrapper).toMatchSnapshot();
  });
});
