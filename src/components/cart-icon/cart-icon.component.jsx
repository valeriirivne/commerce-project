// import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  selectCartItems,
  selectIsCartOpen,
  selectCartCount,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import { useDispatch } from 'react-redux';

// import { CartContext } from '../../context/cart.context';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } =
  //   useContext(CartContext);
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  console.log(isCartOpen);
  const cartCount = useSelector(selectCartCount);
  // const res = useSelector(selectIsCartOpen, selectCartCount, selectCartTotal);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
