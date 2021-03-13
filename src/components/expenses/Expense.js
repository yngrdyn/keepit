import React from 'react';

const Expense = ({ description, amount, createdAt }) => (
    <div>
      <h3> { description } </h3>
      <div> { amount } -  { createdAt } </div>
    </div>
  );

export default Expense;
