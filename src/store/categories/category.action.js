import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

// export const setCategories = (categoriesArray) =>
//   createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
// inside loggerMiddleware function inside logger.js we if no type:
// if (!action.type) {
//   return next(action);
// }

// and the reason why we do this is because all thunks really do is allow actions to be passed as functions!!!
// so there is some middleware somwhere where inside what it does it receives the action
// const thunkMiddleware = (store) => (next) => (action) => {
//   if (typeof action === 'function') {
//     action(dispatch);
//   }
// };

// this is thunk down here:
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  // dispatch({ type: 'category/FETCH_CATEGORIES_START' });
  try {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    // categoriesArray:
    //       [{…}, {…}, {…}, {…}, {…}]
    // 0: {items: Array(9), title: 'Hats'}
    // 1: {title: 'Jackets', items: Array(5)}
    // 2: {title: 'Mens', items: Array(6)}
    // 3: {title: 'Sneakers', items: Array(8)}
    // 4: {items: Array(7), title: 'Womens'}

    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
