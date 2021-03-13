import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../store';

const filterByText = (e, dispatchFn) => {
  dispatchFn(setTextFilter(e.target.value));
};

const Filters = (props) => (
  <div>
    <input type="text" defaultValue={props.filters.text} onChange={(e) => filterByText(e, props.dispatch)}/>
  </div>
);

const mapStateToProps = ({_, filters}) => {
  return {
    filters,
  }
};

export default connect(mapStateToProps)(Filters);
