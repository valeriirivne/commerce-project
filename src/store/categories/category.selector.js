// export const selectCategoriesMap = (state) => state.categories.categoriesMap;

//createSelector memoize selectors
import { createSelector } from 'reselect';

//we need to create input selectors and output selectors. Input selectors are selectors that gives us parameters that we need to determine what output should be

//we create the initial selector that gives us back just that slice of the reducer that we need , in our case categoryReducer
//selector function
const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  //two arguments , the first is an array of input selectors
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// export const selectCategoriesMap = (state) => {
//   console.log('selector fired');
//   //Reduce is always returning back a new object
//   return state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;

//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});

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
