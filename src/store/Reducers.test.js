import reducers from './Reducers';
import moment from 'moment';
import { actions } from './Actions';
import expenses from '../fixtures/expenses';

describe('Reducers', () => {

  it('should setup default state', () => {
    // when
    const state = reducers(undefined, { type: '@@INIT'});
    // then
    expect(state)
      .toEqual({
        expenses: [],
        filters: {
          text: '',
          sortBy: 'date',
          startDate: moment().startOf('month'),
          endDate: moment().endOf('month'),
        },
      });
  });

  describe('Filters', () => {
    it('should set sortBy to amount', () => {
      // given
      const currentState = {
        expenses: [],
        filters: {
          sortBy: 'date',
        },
      };
      // when
      const state = reducers(currentState, { type: actions.sortByAmount });
      // then
      expect(state.filters.sortBy)
        .toBe('amount');
    });

    it('should set sortBy to date', () => {
      // given
      const currentState = {
        expenses: [],
        filters: {
          sortBy: 'amount',
        },
      };
      // when
      const state = reducers(currentState, { type: actions.sortByDate });
      // then
      expect(state.filters.sortBy)
        .toBe('date');
    });

    it('should set textFilter', () => {
      // given
      const currentState = {
        expenses: [],
        filters: {
          text: '',
        },
      };
      const text = 'My fancy text';
      // when
      const state = reducers(currentState, { type: actions.setTextFilter, text });
      // then
      expect(state.filters.text)
        .toBe(text);
    });

    it('should set startDate', () => {
      // given
      const currentState = {
        expenses: [],
        filters: {
          startDate: undefined,
        },
      };
      const startDate = moment(0);
      // when
      const state = reducers(currentState, { type: actions.setStartDate, startDate });
      // then
      expect(state.filters.startDate)
        .toBe(startDate);
    });

    it('should set endDate', () => {
      // given
      const currentState = {
        expenses: [],
        filters: {
          startDate: undefined,
        },
      };
      const endDate = moment(0);
      // when
      const state = reducers(currentState, { type: actions.setEndDate, endDate });
      // then
      expect(state.filters.endDate)
        .toBe(endDate);
    });
  });

  describe('Expenses', () => {
    it('should remove expense by id', () => {
      // given
      const currentState = {
        expenses,
      }
      // when
      const state = reducers(currentState, { type: actions.removeExpense, id: expenses[1].id });
      // then
      expect(state.expenses)
        .toEqual([
          expenses[0],
          expenses[2],
        ]);
    });

    it('should not remove expense if id not found', () => {
      // given
      const currentState = {
        expenses,
      }
      // when
      const state = reducers(currentState, { type: actions.removeExpense, id: 'notExistingId' });
      // then
      expect(state.expenses)
        .toEqual(expenses);
    });

    it('should add an expense', () => {
      // given
      const currentState = {
        expenses,
      }
      const expense = {
        id: 'myFancyId',
        description: 'Laptop',
      };
      // when
      const state = reducers(currentState, { type: actions.addExpense, expense });
      // then
      expect(state.expenses)
        .toEqual([...expenses, expense]);
    });

    it('should edit an expense', () => {
      // given
      const currentState = {
        expenses,
      }
      const amount = 1234567;
      // when
      const state = reducers(currentState, { type: actions.editExpense, id: expenses[1].id, updates: { amount } });
      // then
      expect(state.expenses[1].amount)
        .toBe(amount);
    });

    it('should not edit an expense if id not found', () => {
      // given
      const currentState = {
        expenses,
      }
      const amount = 1234567;
      // when
      const state = reducers(currentState, { type: actions.editExpense, id: 'notExistingId', updates: { amount } });
      // then
      expect(state.expenses)
        .toEqual(expenses);
    });

    it('should set expenses', () => {
      // given
      const currentState = {
        expenses: [expenses[0]],
      }
      // when
      const state = reducers(currentState, { type: actions.setExpenses, expenses });
      // then
      expect(state.expenses)
        .toEqual(expenses);
    });
  });
});