import { combineReducers } from 'redux';
import types from './types';

const initialState = {
  isLoading: false
};

const app = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {

    case types.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: payload
      };

    case types.TYPE:
      return {
        ...state,
        markets: payload,
        loading: true
      }

    default:
      return state
  }
}


export default combineReducers({
  reducer,
});
