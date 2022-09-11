// import { createContext, useEffect, useReducer } from 'react';

// import { createAction } from '../utils/reducer/reducer.utils';

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from '../utils/firebase/firebase.utils';

// //as the actual value you want to access
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPE = {
//   SET_CURRENT_USER: 'SET_CURRENT_USER',
// };

// const userReducer = (state, action) => {
//   console.log('dispatched');
//   console.log(action);
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPE.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       throw new Error(`Unhandled type ${type} in userReducer`);
//   }
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// export const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

//   const { currentUser } = state;
//   // const currentUser = state.currentUser;
//   console.log(state);
//   console.log(currentUser);

//   //dispatch action based creators//action creator function that dispatches an action
//   const setCurrentUser = (user) => {
//     dispatch(createAction('SET_CURRENT_USER', user));

//     // dispatch({ type: 'SET_CURRENT_USER', payload: user });
//   };

//   //this value we instantiate as an object we call
//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
