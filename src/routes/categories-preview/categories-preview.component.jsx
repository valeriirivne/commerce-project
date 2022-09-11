import { Fragment } from 'react';

import { selectCategoriesMap } from '../../store/categories/category.selector';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { useSelector } from 'react-redux';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  //Here we use the state from redux with the help of useSelector, inside of useSelector we call selectCategoriesMap function from category.selector.js component, which in it's turn take state object which (state of redux) we can reach cause useSelector function gives us state object inside callback function, as an argument.
  const categoriesMap = useSelector(selectCategoriesMap);
  // const categoriesMap = useSelector((state) => state.categories.categoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]; //all the products array from each category

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
