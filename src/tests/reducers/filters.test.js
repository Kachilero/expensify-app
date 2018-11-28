import filterReducers from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
  const state = filterReducers(undefined, { type: '@@init' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filterReducers(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE' };
  const state = filterReducers(currentState, action);
  expect(state.sortBy).toBe('date');
})

// should set text filter
test('should set text filter', () => {
  const text = 'This is the filter';
  const action = { 
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filterReducers(undefined, action);
  expect(state.text).toBe(text);
});

test('should set start date filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const state = filterReducers(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set end date filter', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const state = filterReducers(undefined, action);
  expect(state.endDate).toEqual(endDate);
});