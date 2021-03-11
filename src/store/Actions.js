import { v4 as uuid } from 'uuid';

const actions = {
  addExpense: 'ADD_EXPENSE',
  removeExpense: 'REMOVE_EXPENSE',
  editExpense: 'EDIT_EXPENSE',
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

const removeExpense = ({id} = {}) => ({
  type: actions.removeExpense,
  id,
});

const editExpense = (id, updates) => ({
  type: actions.editExpense,
  id,
  updates,
});

export { actions, addExpense, removeExpense, editExpense };
