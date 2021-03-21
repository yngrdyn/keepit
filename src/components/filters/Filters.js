import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../store';
export class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    calendarFocused: null,
  };

  filterByText = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  sortBy = (e) => {
    e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
  }

  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
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
          onChange={this.filterByText}/>
        <select
          value={this.props.filters.sortBy} 
          onChange={this.sortBy}>
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

const mapStateToProps = ({_, filters}) => ({
  filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
