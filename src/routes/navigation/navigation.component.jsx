import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

// import './navigation.styles.scss';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {
  // console.log('NAVIGATION IS RENDERING OR RERENDERING');
  //When we type our user in sign-in form and then click submit button in browser, by submitting a form we call handleSubmit function which takes our user from signInAuthUserWithEmailAndPassword function from firebase and then we update our current user in the context file. As we update our current user in the context file through useStat and this component is listening to our current user state we update this component which is navigation.component and trigger it to rerender because of changes of our state.(002 user context.mp4 11:00). In userContext we have onAuthStateChangedListener in useEffect call, which we call the first time the App renders
  // const { currentUser } = useContext(UserContext);

  const currentUser = useSelector(selectCurrentUser);
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const { isCartOpen } = useContext(CartContext);
  //Here we use the state from redux with the help of useSelector, inside of useSelector we call selectIsCartOpen function from cart.selector.js component, which in it's turn take state object which (state of redux) we can reach cause useSelector function gives us state object inside callback function, as an argument.
  const isCartOpen = useSelector(selectIsCartOpen);
  // const isCartOpen = useSelector((state) => state.cart.cartItems);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
