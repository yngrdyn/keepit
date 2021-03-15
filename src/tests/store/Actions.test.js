import { addExpense, editExpense, removeExpense, actions } from '../../store';

test('should setup removeExpense action object', () => {
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

test('should setup editExpense action object', () => {
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

test('should setup addExpense action object with default values', () => {
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

test('should setup addExpense action object with provided values', () => {
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
