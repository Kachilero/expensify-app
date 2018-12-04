/**
* Returns the total number and sum of expenses
 * @param expenses
 *
 * @return summed list
 */

export default (expenses) => {
  //  return expenses.reduce((cumulativeTotal, expenses) => {
  //   return cumulativeTotal + expenses.amount
  // }, 0);
  // One liner
  return expenses.reduce((sum, expenses) => sum + expenses.amount, 0);
}
