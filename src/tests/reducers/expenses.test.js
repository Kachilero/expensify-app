import expensesReducer from '../../reducers/expenses';
import expensesArray from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, '@@init');
  let toEqual = expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expensesArray[1].id
  };
  const state = expensesReducer(expensesArray, action);
  expect(state).toEqual([expensesArray[0], expensesArray[2]]);
});

test('should not remove expense if ID is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expensesArray, action);
  expect(state).toEqual(expensesArray);
});

test('should add expense', () => {
  const expense = {
    amount: 55000,
    createdAt: 0,
    description: 'Test',
    id: '109',
    note: ""
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expensesArray, action);
  expect(state).toEqual([...expensesArray, expense]);
});

test('should edit an existing expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expensesArray[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expensesArray, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expensesArray, action);
  expect(state).toEqual(expensesArray);
});
