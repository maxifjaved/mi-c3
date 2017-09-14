import axios from 'axios';
import { SET_PEOPLES_DETAIL } from './types';

export function setPeoplesList(peoples) {
  return {
    type: SET_PEOPLES_DETAIL,
    peoples
  };
}

export function getPeoplesList() {
  return dispatch => {
    return axios.get('http://swapi.co/api/people/').then(res => {
      dispatch(setPeoplesList(res.data));
    });
  }
}