// this store is combined place where all of our redux happens, so where our state lives , also where we receive actions and we dispatch them into our reducers to update the state
import { legacy_createStore as createStore } from 'redux';

// import { compose, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

// import { rootReducer } from './root-reducer';

// const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhancers);

import { compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
