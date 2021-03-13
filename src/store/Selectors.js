const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const textMatch = (expense.description.toLowerCase()).includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

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