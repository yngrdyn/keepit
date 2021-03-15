import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../store';

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
class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    calendarFocused: null,
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.filters.text}
          onChange={(e) => filterByText(e, this.props.dispatch)}/>
        <select
          value={this.props.filters.sortBy} 
          onChange={(e) => sortBy(e, this.props.dispatch)}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="filters_start_date"
          endDate={this.props.filters.endDate}
          endDateId="filters_end_date"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          />
      </div>
    );
  }
}

const mapStateToProps = ({_, filters}) => {
  return {
    filters,
  }
};

export default connect(mapStateToProps)(Filters);
