import reducers from './Reducers';
import moment from 'moment';
import { actions } from './Actions';

describe('Reducers', () => {

  describe('Filters', () => {
    it('should setup default filter values', () => {
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

    it('should set sortBy to amount', () => {
      // when
      const state = reducers(undefined, { type: actions.sortByAmount });
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

});