import { combineReducers } from 'redux';
import { actions } from './Actions';

const initialState = {
  expenses: [],
  filters: {
    text: '',
    sortBy: undefined,
    startDate: undefined,
    endDate: undefined,
  },
};

const expensesReducer = (state = initialState.expenses, action) => {
  switch (action.type) {
    case actions.addExpense:
      return [
        ...state,
        action.expense,
      ];
    case actions.removeExpense:
      return state.filter(({id}) => id !== action.id);
    case actions.editExpense:
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        }
        return expense;
      })
    default:
      return state;
  }
};

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = (state, action) => {
  return combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })(state, action);
}

export default reducers;
