import React from 'react';
import { ExpenseList, Filters } from '../components';

const DashboardPage = () => (
    <div title="keepit" subtitle="Keep your expenses within a budget">
      <Filters/>
      <ExpenseList/>
    </div>
);

export default DashboardPage;