import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../store';

const Filters = (props) => (
  <div>
    <input type="text" defaultValue={props.filters.text} onChange={(e) => {
      props.dispatch(setTextFilter(e.target.value));
    }}/>
  </div>
);

const mapStateToProps = ({_, filters}) => {
  return {
    filters,
  }
};

export default connect(mapStateToProps)(Filters);
