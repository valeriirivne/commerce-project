// this store is combined place where all of our redux happens, so where our state lives , also where we receive actions and we dispatch them into our reducers to update the state

import { legacy_createStore as createStore } from 'redux';

import { compose, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// Middleware just catches an action before the action hits the reducer
const loggerMiddleware = (store) => (next) => (action) => {
  // we just want to log appropriate action

  if (!action.type) {
    return next(action);
  }

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState', store.getState());

  next(action);

  console.log('next state: ', store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

//currying is a function that returns you back another function

// const curryFunc = (a) => (b, c) => {
//   a + b -c
// };

// const withA = curryFunc(3);
// console.log(withA);
// (b, c) => { 3 + b - c };

// withA(2, 4); //3 + 2 - 4
