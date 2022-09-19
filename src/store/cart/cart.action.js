// Екстраполювати (англ. ex trapolate, нім. extrapolieren) — поширювати висновки, одержані щодо однієї частини якоїсь системи, на іншу частину тієї самої системи.

import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    // id cartItem.id is not equal to cartItemToRemove.id than keep it, leave only that is equal
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

///////
/////
/////

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

//With the help of this functions which  are called inside some components of our App application, we return an action(an object {type: SET_CART_ITEMS, payload: newCartItems}) and then inside that component we call this function from we need to dispatch this object that we return back from (i.e.addItemToCart function), then with the help of useDispatch()(what react-redux gives us) we dispatch this object to reducer(cartReducer function), then reducer function which has initial state parameter as well as action parameter(from which we return type and payload variables) checks finds the type we invoke function with ('cart/SET_CART_ITEMS') and returns a new object based on our payload value with proper key. and reducer send this new object to our global redux store(rootReducer) from which we can get data we need(). Then in the any component with the help of useSelector(which gives us global state object, what we use inside callback function that we call from inside useSelector hook) we get that data.

// when we call addItemToCart we take cartitems from which we return new object and from action from that new object ({type, payload}) and then form the component where we use this custom function we dispatch this new object to our reducer which in it's turn ,make new object and sends it ot our rootComponent which is our global redux state.
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  //
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
