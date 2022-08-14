import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = { isCartOpen, setIsCartOpen };
  console.log('we call CART provider ');
  console.log('IS CART OPEN !!!!!!!!!!!!');
  console.log(isCartOpen);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
