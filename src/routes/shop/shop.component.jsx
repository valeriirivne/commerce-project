import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';
import { setCategories } from '../../store/categories/category.action.js';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');

      // categoriesArray:
      //       [{…}, {…}, {…}, {…}, {…}]
      // 0: {items: Array(9), title: 'Hats'}
      // 1: {title: 'Jackets', items: Array(5)}
      // 2: {title: 'Mens', items: Array(6)}
      // 3: {title: 'Sneakers', items: Array(8)}
      // 4: {items: Array(7), title: 'Womens'}

      //Here we dispatch an action? in other words what we are doing is adding categoriesArray to the global state which is in root-reducer, so we add the result of categoriesReducer component({ categories: payload(which is categoriesArray) } ) with the help of action we dispatch it to the root reducer rootReducer = combineReducers({   user: userReducer   categories: categoriesReducer});

      dispatch(setCategories(categoriesArray));
      // dispatch({type: 'category/SET_CATEGORIES_MAP', payload: categoriesArray})

      // dispatch(
      //   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoryMap)
      // );
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

// let cache = {};

// function mem(n) {
//   if (n in cache) {
//     return cache[n];
//   } else {
//     cache[n] = 5 + 80;
//   }
// }
