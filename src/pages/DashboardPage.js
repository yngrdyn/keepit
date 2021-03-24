import React from 'react';
import { ExpenseList, ExpenseSummary, Filters } from '../components';

const DashboardPage = () => (
    <div>
      <ExpenseSummary />
      <Filters/>
      <ExpenseList/>
    </div>
);

export default DashboardPage;