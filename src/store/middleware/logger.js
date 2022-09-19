// Middleware just catches an action before the action hits the reducer
export const loggerMiddleware = (store) => (next) => (action) => {
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
