/**
 * Test the Expenses Actions
 *
 * Tests that we get back the correct objects
 *
 * @param name - name of test
 * @param anonymous - function that tests
 */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);


beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = { description, note, amount, createdAt }
  });
  db.ref('expenses').set(expensesData).then(() => { done(); });
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should remove expense from firebase', (done) => {
  const store = createMockStore();
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return db.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense( `123abc`, {note: 'Test Note'} );
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
      updates: {
        note: 'Test Note'
      }
  })
});

test('should setup add expense action object', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'Note',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
  })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    })
    .catch((e) => { console.error("Error: ", e); });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefault = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    });
    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
  })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
    })
    .catch((e) => { console.error("Error: ", e); });
});

test('should set up SET_EXPENSE action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});
