// this store is combined place where all of our redux happens, so where our state lives , also where we receive actions and we dispatch them into our reducers to update the state

import { legacy_createStore as createStore } from 'redux';
import { compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { loggerMiddleware } from './middleware/logger';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// console.log('STORE IS FIRED');

//configuration object that tells redux persist what we want
const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['user'],
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// const composedEnhancers = compose(applyMiddleware(...middleWares));
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// sore now use persistReducer instead of rootReducer
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

//currying is a function that returns you back another function

// const curryFunc = (a) => (b, c) => {
//   a + b -c
// };

// const withA = curryFunc(3);
// console.log(withA);
// (b, c) => { 3 + b - c };

// withA(2, 4); //3 + 2 - 4
