import { combineReducers } from 'redux';
import { actions } from './Actions';

const initialState = {
  expenses: [],
};

const expensesReducer = (state = initialState.expenses, action) => {
  switch (action.type) {
    case actions.addExpense:
      return [
        ...state,
        action.expense,
      ];
    default:
      return state;
  }
};

const reducers = (state, action) => {
  return combineReducers({
    expenses: expensesReducer,
  })(state, action);
}

export default reducers;
