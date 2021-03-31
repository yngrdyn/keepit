import { combineReducers } from 'redux';
import { actions } from './Actions';
import moment from 'moment';

const initialState = {
  expenses: [],
  filters: {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
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
    case actions.setExpenses:
      return action.expenses;
    default:
      return state;
  }
};

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case actions.setTextFilter:
      return {
        ...state,
        text: action.text,
      };
    case actions.sortByAmount:
      return {
        ...state,
        sortBy: 'amount',
      };
    case actions.sortByDate:
      return {
        ...state,
        sortBy: 'date',
      };
    case actions.setStartDate:
      return {
        ...state,
        startDate: action.startDate,
      }
    case actions.setEndDate:
      return {
        ...state,
        endDate: action.endDate,
      }
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
