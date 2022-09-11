import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';

//from categoriesReducer function inside category.reducer we return back an object with key categories and value which is:   //
//  [{…}, {…}, {…}, {…}, {…}]
// 0: {items: Array(9), title: 'Hats'}
// 1: {title: 'Jackets', items: Array(5)}
// 2: {title: 'Mens', items: Array(6)}
// 3: {title: 'Sneakers', items: Array(8)}
// 4: {items: Array(7), title: 'Womens'}
//  That is from rootReducer we return back an object in which categories is key and {
//   categories: payload,
// } is the value so we return :
// {user: {…}, categories: {…}, cart: {…}}, where:
// categories: {categories: Array(0)}

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
