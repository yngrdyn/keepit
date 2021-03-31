import database from '../firebase/firebase';

const actions = {
  addExpense: 'ADD_EXPENSE',
  editExpense: 'EDIT_EXPENSE',
  removeExpense: 'REMOVE_EXPENSE',
  setExpenses: 'SET_EXPENSES',
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

    return database.ref('expenses').push(expense)
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

const setExpenses = (expenses) => ({
  type: actions.setExpenses,
  expenses,
});

const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value')
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          })
        });

        dispatch(setExpenses(expenses));
      });
  };
};

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
  startSetExpenses as setExpenses,
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
};
