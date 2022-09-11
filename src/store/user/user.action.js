import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPE } from './user.types';

export const setCurrentUser = (user) => {
  // console.log('USER ACTION IS FIRED');
  return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);
};
