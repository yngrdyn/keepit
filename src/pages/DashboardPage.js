import React from 'react';
import { ExpenseList, Filters } from '../components';

const DashboardPage = () => (
    <div>
      <Filters/>
      <ExpenseList/>
    </div>
);

export default DashboardPage;