import { Fragment } from 'react';

import { selectCategoriesMap } from '../../store/categories/category.selector';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { useSelector } from 'react-redux';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  // const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  const categoriesMap = useSelector(selectCategoriesMap);

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
