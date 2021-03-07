import { v4 as uuid } from 'uuid';

const actions = {
  addExpense: 'ADD_EXPENSE',
}

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
}) => ({
  type: actions.addExpense,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
});

export { actions, addExpense };
