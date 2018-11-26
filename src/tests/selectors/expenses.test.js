/**
 * Test the Expenses Selector
 * 
 * @param name - name of test
 * @param anonymous - function that tests
 */
import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expensesArray from '../fixtures/expenses';

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expensesArray, filters)
  expect(result).toEqual([expensesArray[2], expensesArray[1]]);
});

test('should filter by START date', () => {
  const startDateFilter = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpenses(expensesArray, startDateFilter);
  expect(result).toEqual([expensesArray[2], expensesArray[0]]);
});

test('should filter by END date', () => {
  const endDateFilter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  }
  const result = selectExpenses(expensesArray, endDateFilter);
  expect(result).toEqual([expensesArray[0], expensesArray[1]])
});

test('should sort by date', () => {
  const sortByDateFilter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expensesArray, sortByDateFilter);
  expect(result).toEqual([
    expensesArray[2],
    expensesArray[0],
    expensesArray[1]
  ])
});

test('should sort by amount', () => {
  const sortByAmountFilter = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expensesArray, sortByAmountFilter);
  expect(result).toEqual([
    expensesArray[1],
    expensesArray[2],
    expensesArray[0]
  ])
});
