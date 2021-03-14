import React from 'react';
import { Link } from 'react-router-dom';

const Expense = ({ id, description, amount, createdAt }) => (
    <div>
      <Link to={`edit/${id}`}>
        <h3> { description } </h3>
      </Link>
      <div> { amount } -  { createdAt } </div>
    </div>
  );

export default Expense;
