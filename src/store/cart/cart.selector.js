// oue selectors should be what actually extrapolates out the logic that we had before
import { createSelector } from 'reselect';

// with the help of useSelector in side component we want to use redux state there, inside of useSelector we call selectCartItems and selectIsCartOpen function from cart.selector.js component, which in it's turn take state object which (state of redux) we can reach cause useSelector function gives us state object inside callback function, as an argument.

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

// const newCartCount = newCartItems.reduce(
//   (total, cartItem) => total + cartItem.quantity,
//   0
// );

// const newCartTotal = newCartItems.reduce(
//   (total, cartItem) => total + cartItem.quantity * cartItem.price,
//   0
// );
