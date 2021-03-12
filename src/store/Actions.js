import { v4 as uuid } from 'uuid';

const actions = {
  addExpense: 'ADD_EXPENSE',
  removeExpense: 'REMOVE_EXPENSE',
  editExpense: 'EDIT_EXPENSE',
  setTextFilter: 'SET_TEXT_FILTER',
  sortByAmount: 'SORT_BY_AMOUNT',
  sortByDate: 'SORT_BY_DATE',
  setStartDate: 'SET_START_DATE',
  setEndDate: 'SET_END_DATE',
}

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
}) => ({
  type: actions.addExpense,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
});

const removeExpense = ({id} = {}) => ({
  type: actions.removeExpense,
  id,
});

const editExpense = (id, updates) => ({
  type: actions.editExpense,
  id,
  updates,
});

const setTextFilter = (text = '') => ({
  type: actions.setTextFilter,
  text,
});

const sortByAmount = () => ({
  type: actions.sortByAmount,
});

const sortByDate = () => ({
  type: actions.sortByDate,
});

const setStartDate = (startDate) => ({
  type: actions.setStartDate,
  startDate,
});

const setEndDate = (endDate) => ({
  type: actions.setEndDate,
  endDate,
});

export { actions, addExpense, removeExpense, editExpense, setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate };
