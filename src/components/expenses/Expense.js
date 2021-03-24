import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Expense = ({ id, description, amount, createdAt }) => (
    <div>
      <Link to={`edit/${id}`}>
        <h3> { description } </h3>
      </Link>
      <div> { numeral(amount/100).format('$0,0.00') } -  { moment(createdAt).format('MMM do, YYYY') } </div>
    </div>
  );

export default Expense;
