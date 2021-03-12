const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const textMatch = (expense.description.toLowerCase()).includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

    return textMatch && startDateMatch && endDateMatch;
  });
};

export { getVisibleExpenses };