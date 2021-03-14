import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../../store';

const filterByText = (e, dispatchFn) => {
  dispatchFn(setTextFilter(e.target.value));
};

const sortBy = (e, dispatchFn) => {
  if (e.target.value === 'date') {
    dispatchFn(sortByDate());
  } else {
    dispatchFn(sortByAmount());
  }
};

const Filters = (props) => (
  <div>
    <input
      type="text"
      defaultValue={props.filters.text}
      onChange={(e) => filterByText(e, props.dispatch)}/>
    <select
      value={props.filters.sortBy} 
      onChange={(e) => sortBy(e, props.dispatch)}>
      <option value='date'>Date</option>
      <option value='amount'>Amount</option>
    </select>
  </div>
);

const mapStateToProps = ({_, filters}) => {
  return {
    filters,
  }
};

export default connect(mapStateToProps)(Filters);
