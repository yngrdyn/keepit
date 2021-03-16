import moment from 'moment';
import { actions, addExpense, editExpense, removeExpense, setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from './Actions';

describe('Actions', () => {
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
  
    it('should setup addExpense action object with default values', () => {
      // given
      const expense = {};
      // when
      const action = addExpense(expense);
      // then
      expect(action)
        .toEqual({
          type: actions.addExpense,
          expense: {
            id: expect.any(String),
            description: '',
            note: '',
            createdAt: 0,
            amount: 0,
          },
        })
    });
    
    it('should setup addExpense action object with provided values', () => {
      // given
      const expense = {
        description: 'My fancy description',
        amount: 12345,
        createdAt: 1000,
        note: 'My fancy note on the expense'
      };
      // when
      const action = addExpense(expense);
      // then
      expect(action)
        .toEqual({
          type: actions.addExpense,
          expense: {
            ...expense,
            id: expect.any(String),
          },
        })
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
