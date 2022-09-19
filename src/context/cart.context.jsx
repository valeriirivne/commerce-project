// import { createContext, useReducer } from 'react';

// import { createAction } from '../utils/reducer/reducer.utils';

// const addCartItem = (cartItems, productToAdd) => {
//   //find if cartItems contains productToAdd

//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   // if found, increment quantity
//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   //return new array with modified cartItems/ new cart item
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );

//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//     // id cartItem.id is not equal to cartItemToRemove.id than keep it, leave only that is equal
//   }

//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// export const CartContext = createContext({
//   // isCartOpen: false,
//   // setIsCartOpen: () => {},
//   // cartItems: [],
//   // addItemToCart: () => {},
//   // removeItemFromCart: () => {},
//   // clearItemFromCart: () => {},
//   // cartCount: 0,
//   // cartTotal: 0,
// });

// CartContext.displayName = 'CartContext';

// const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: 'SET_CART_ITEMS',
//   SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
// };

// //Reducers only only only store readable values
// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     default:
//       throw new Error(`Unhandled type ${type} in cartReducer`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   // const [isCartOpen, setIsCartOpen] = useState(false);
//   // const [cartItems, setCartItems] = useState([]);

//   const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

//   const { cartItems, cartCount, cartTotal, isCartOpen } = state;
//   console.log(cartItems);

//   const updateCartItemReducer = (newCartItems) => {
//     const newCartCount = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );

//     const newCartTotal = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );

//     dispatch(
//       createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//         cartItems: newCartItems,
//         cartTotal: newCartTotal,
//         cartCount: newCartCount,
//       })

//       //   {
//       //   type: CART_ACTION_TYPES.SET_CART_ITEMS,
//       //   payload: {
//       //     cartItems: newCartItems,
//       //     cartTotal: newCartTotal,
//       //     cartCount: newCartCount,
//       //   },
//       // });
//     );
//   };

//   const setIsCartOpen = (bool) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
//   };

//   // addItemToCart is going to be a function that triggers whenever a user clicks on <Button buttonType="inverted">Add to card</Button> in ProductCard Component, so that means what we gonna receive from the ProductCard Component is going to be a ProductToAdd(06:09 006 Add to Cart)
//   const addItemToCart = (productToAdd) => {
//     // setCartItems(addCartItem(cartItems, productToAdd));
//     const newCartItems = addCartItem(cartItems, productToAdd);
//     updateCartItemReducer(newCartItems);
//   };

//   const removeItemFromCart = (cartItemToRemove) => {
//     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//     updateCartItemReducer(newCartItems);
//   };

//   const clearItemFromCart = (cartItemToClear) => {
//     const newCartItems = clearCartItem(cartItems, cartItemToClear);
//     updateCartItemReducer(newCartItems);
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     cartItems,
//     removeItemFromCart,
//     clearItemFromCart,
//     cartCount,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
