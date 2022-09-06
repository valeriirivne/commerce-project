import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';

// import { CategoriesContext } from '../../context/categories.context';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();

  // const { categoriesMap } = useContext(CategoriesContext);
  // const categoriesMap = useSelector((state) => state.categories.categoriesMap);
  console.log('render/re-rendering category component');
  //useSelector runs every time that the state object has updated in the root reducer. However it only rerenders this component if the return of the selector function you passed to it is different.
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log(categoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  //   const products = categoriesMap[category];

  useEffect(() => {
    console.log('effect fired calling setProducts');
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
