import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  // we take a value from prop(buttonType)  from the component where we use our exported Button component. After with the help of Computed Property Names we get our string from BUTTON_TYPE_CLASSES object and reach the value of these keys of the object down
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  //we return back one from { BaseButton, GoogleSignInButton, InvertedButton} from './button.styles'; So we assign to custom button one of this components from button.styles.jsx. So component <CustomButton> would be equal to <button> extended by GoogleSignInButton or InvertedButton.
  // console.log(CustomButton);

  return (
    <CustomButton
      // className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
};

export default Button;

// const firstName = 'tiHua';

// const person = {
//   [firstName]: 'John',
//   lastName: 'Doe',
//   id: 5566,
// };

// person[firstName];
