import moment from 'moment';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { actions, addExpense, editExpense, removeExpense, setEndDate, setExpenses, setStartDate, setTextFilter, sortByAmount, sortByDate } from './Actions';

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Expenses', () => {
    it('should setup removeExpense action object', () => {
      // given
      const id = 'my.fancy.id';
      // when
      const action = removeExpense({ id });
      // then
      expect(action)
        .toEqual({
          type: actions.removeExpense,
          id,
        })
    });
  
    it('should setup editExpense action object', () => {
      // given
      const id = 'my.fancy.id';
      const updates = { note: 'New note value' };
      // when
      const action = editExpense(id, updates);
      // then
      expect(action)
        .toEqual({
          type: actions.editExpense,
          id,
          updates,
        })
    });

    it('should setup addExpense to database and store with default values', (done) => {
      // given
      const store = createMockStore({});
      const expenseData = {}
      // when - then
      store.dispatch(addExpense(expenseData))
        .then(() => {
          const dispatchedActions = store.getActions();
          expect(dispatchedActions[0])
            .toEqual({
              type: actions.addExpense,
              expense: {
                id: expect.any(String),
                amount: 0,
                createdAt: 0,
                description: '',
                note: '',
              },
            })
          done();
        });
    });
  
    it('should setup addExpense to database and store with provided values', (done) => {
      // given
      const store = createMockStore({});
      const expenseData = {
        description: 'My fancy description',
        amount: 12345,
        createdAt: 1000,
        note: 'My fancy note on the expense'
      };
      // when - then
      store.dispatch(addExpense(expenseData))
        .then(() => {
          const dispatchedActions = store.getActions();
          expect(dispatchedActions[0])
            .toEqual({
              type: actions.addExpense,
              expense: {
                id: expect.any(String),
                ...expenseData,
              },
            })
          done();
        });
    });

    it('should set expenses from firebase', (done) => {
      // given
      const store = createMockStore({});
      // when - then
      store.dispatch(setExpenses())
        .then(() => {
          const dispatchedActions = store.getActions();
          expect(dispatchedActions[0])
            .toEqual({
              type: actions.setExpenses,
              expenses: [],
            })
          done();
        });
    });
  });
  
  describe('Filters', () => {
    it('should generate setStartDate action object', () => {
      // given
      const startDate = moment(0);
      // when
      const action = setStartDate(startDate);
      // then
      expect(action)
        .toEqual({
          type: actions.setStartDate,
          startDate,
        });
    });
  
    it('should generate setEndDate action object', () => {
      // given
      const endDate = moment(0);
      // when
      const action = setEndDate(endDate);
      // then
      expect(action)
        .toEqual({
          type: actions.setEndDate,
          endDate,
        });
    });
  
    it('should generate setTextFilter action object with text value', () => {
      // given
      const text = 'My fancy text filter';
      // when
      const action = setTextFilter(text);
      // then
      expect(action)
        .toEqual({
          type: actions.setTextFilter,
          text,
        });
    });
  
    it('should generate setTextFilter action object with default value', () => {
      // when
      const action = setTextFilter();
      // then
      expect(action)
        .toEqual({
          type: actions.setTextFilter,
          text: '',
        });
    });
  
    it('should generate sortByAmount action object', () => {
      // when
      const action = sortByAmount();
      // then
      expect(action)
        .toEqual({
          type: actions.sortByAmount,
        });
    });
  
    it('should generate sortByDate action object', () => {
      // when
      const action = sortByDate();
      // then
      expect(action)
        .toEqual({
          type: actions.sortByDate,
        });
    });
  });
});
