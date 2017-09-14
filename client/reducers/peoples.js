import { SET_PEOPLES_DETAIL } from '../actions/types';
import { getPageNumber } from '../utils/helper';

const initialState = {
  peoples: []
};

export default (state = initialState, action = {}) => {
  
  switch(action.type) {
    case SET_PEOPLES_DETAIL:
      return [
        ...state,
        {
        peoples: action.peoples.results,
        total: action.peoples.count,
        previous:getPageNumber(action.peoples.previous),
        current: getPageNumber(action.peoples.next) - 1,
        next:getPageNumber(action.peoples.next)
      }];

    default: return state;
  }
}
