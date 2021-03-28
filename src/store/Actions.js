import database from '../firebase/firebase';

const actions = {
  addExpense: 'ADD_EXPENSE',
  editExpense: 'EDIT_EXPENSE',
  removeExpense: 'REMOVE_EXPENSE',
  setEndDate: 'SET_END_DATE',
  setStartDate: 'SET_START_DATE',
  setTextFilter: 'SET_TEXT_FILTER',
  sortByAmount: 'SORT_BY_AMOUNT',
  sortByDate: 'SORT_BY_DATE',
}

const addExpense = (expense) => ({
  type: actions.addExpense,
  expense,
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
     } = expenseData;

     const expense = { description, note, amount, createdAt };

    database.ref('expenses').push(expense)
      .then((ref) => {
        dispatch(addExpense({...expense, id: ref.key}));
      });
  }
};

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

export {
  actions,
  startAddExpense as addExpense,
  editExpense,
  removeExpense,
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
};
