import Button from '../button/button.component';
import { Link } from 'react-router-dom';

import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log('CArt DROPDOWN COMPONENT');
  console.log(cartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Link to="/checkout">
        <Button>Go to Checkout</Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
