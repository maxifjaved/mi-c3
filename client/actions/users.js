import axios from 'axios';
import { SET_USERS_LIST } from './types';

export function setUsersList(users) {
  return {
    type: SET_USERS_LIST,
    users
  };
}

export function getUsersList() {
  return dispatch => {
    return axios.get('https://swapi.co/api/people').then(res => {
      dispatch(setUserList(res));
    });
  }
}