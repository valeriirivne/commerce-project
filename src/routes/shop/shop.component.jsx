import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';
import { fetchCategoriesAsync } from '../../store/categories/category.action.js';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(fetchCategoriesAsync());

    dispatch(fetchCategoriesAsync());
    // dispatch({type: 'category/SET_CATEGORIES', payload: categoriesArray})
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
