import { SET_USERS_LIST } from '../actions/types';

const initialState = {
  users: []
};

export default (state = initialState, action = []) => {
  switch(action.type) {
    case SET_USERS_LIST:
      return {
        users: action.users
      };
    default: return state;
  }
}
