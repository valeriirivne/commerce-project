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
      console.log(categoriesArray);

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
