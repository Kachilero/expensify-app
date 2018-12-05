/**
 * Main entry point of the Expensify App
 *
 * In here we import a bunch of functionality then pass back the main app render array.
 */
console.log("Expensify App is running");
import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// Firebase
import './firebase/firebase';

const store = configureStore();
/*store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 190000 }));*/
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


// console.log(`Visible Expenses`);
// console.log(visibleExpenses) ;

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
