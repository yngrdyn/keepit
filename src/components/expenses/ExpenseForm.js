import moment from 'moment';
import React from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    note: '',
    createdAt: moment(),
    datePickerFocused: false,
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.)?\d{0,2}$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ datePickerFocused: focused }));
  };

  render () {
    return (
      <form>
        <input
          type='text'
          placeholder='Description'
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}/>
        <input
          type='text'
          placeholder='Amount'
          value={this.state.amount}
          onChange={this.onAmountChange}/>
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.datePickerFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={(_) => false}/>
        <textarea
          placeholder='Add a note for your expense(optional)'
          value={this.state.note}
          onChange={this.onNoteChange}/>
        <button>Add expense</button>
      </form>
  )};
}

export default connect()(ExpenseForm);
