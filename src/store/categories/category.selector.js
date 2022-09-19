// // export const selectCategoriesMap = (state) => state.categories.categoriesMap;
//in this component we just extract the piece or slice of state we need and pass it as parameter to the callback function inside useSelector function, where we execute this callback function and as a result we get data which we use inside return of that component ro render it to the screen of UI.
import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => {
  return state.categories;
};

// const doThisFunctionCanReachState = (state) => {
//   console.log(state);
// };

export const selectCategories = createSelector(
  //two arguments , the first is an array of input selectors
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;

      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

// // console.log(selectCategoriesMap());

// // export const selectCategoriesMap = (state) => {
// //   console.log('selector fired');
// //   //Reduce is always returning back a new object
// //   return state.categories.categories.reduce((acc, category) => {
// //     const { title, items } = category;

// //     acc[title.toLowerCase()] = items;
// //     return acc;
// //   }, {});
// // };
