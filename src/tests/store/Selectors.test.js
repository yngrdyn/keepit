import { getVisibleExpenses } from '../../store';
import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf(),
  },
];

describe('Selectors', () => {
  it('should filter by text value', () => {
    // given
    const filters = {
      text: 'e',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined,
    };
    // when
    const result = getVisibleExpenses(expenses, filters);
    // then
    expect(result)
      .toEqual([
        expenses[2],
        expenses[1],
      ])
  });

  it('should filter by startDate', () => {
    // given
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(0),
      endDate: undefined,
    };
    // when
    const result = getVisibleExpenses(expenses, filters);
    // then
    expect(result)
      .toEqual([
        expenses[2],
        expenses[0],
      ])
  });

  it('should filter by endDate', () => {
    // given
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0).add(2, 'days'),
    };
    // when
    const result = getVisibleExpenses(expenses, filters);
    // then
    expect(result)
      .toEqual([
        expenses[0],
        expenses[1],
      ])
  });

  it('should sortByDate', () => {
    // given
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined,
    };
    // when
    const result = getVisibleExpenses(expenses, filters);
    // then
    expect(result)
      .toEqual([
        expenses[2],
        expenses[0],
        expenses[1],
      ])
  });

  it('should sortByAmount', () => {
    // given
    const filters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined,
    };
    // when
    const result = getVisibleExpenses(expenses, filters);
    // then
    expect(result)
      .toEqual([
        expenses[1],
        expenses[2],
        expenses[0],
      ])
  });
});