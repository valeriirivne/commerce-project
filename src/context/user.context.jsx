import { createContext, useState, useEffect, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  console.log('dispatched');
  console.log(action);
  // I want you to give me back an object where the current user is equal to the payload because as I mentioned, the payload is going to store the value that is important for this reducer to know what to update this state value with.

  // return {
  //   currentUser: payload,
  // };

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;
  // const currentUser = state.currentUser;
  console.log(state);
  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch(createAction('SET_CURRENT_USER', user));

    // dispatch({ type: 'SET_CURRENT_USER', payload: user });
  };

  //this value we instantiate as an object we call
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

//Reducers as code are pretty simple, the pretty much functions that return back an object
// The thing about reducers is that these reducers change the object that we get back, and the properties and the values inside them based on the action. But we also received something else, which is the current state.So as I mentioned, reducers return, turn back an object. This object is the state in the reducer. So what we get back is actually this current value from the reducer. And the reason why is sometimes you want to reference these values in order to derive what the next

// const userReducer = (state, action) => {
//   return {
//     currentUser:
//   }
// }
