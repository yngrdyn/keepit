import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const textMatch = (expense.description.toLowerCase()).includes(text.toLowerCase());
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if ( sortBy === 'date' ) {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else {
      return a.amount < b.amount ? 1 : -1;
    }
  })
};

export { getVisibleExpenses };