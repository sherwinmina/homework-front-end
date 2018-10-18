import { 
  FETCH_MORE_GIPHS_SUCCESS,
  FETCH_MORE_GIPHS_ERROR,
  IS_FETCHING,
  ON_SUCCESS,
  ON_ERROR,
  ORDER_BY
 } from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  data: [],
  errorMessage: '',
  ascending : true
}

export default function(state = INITIAL_STATE, action) { 
  switch (action.type) {
    case ORDER_BY:
      return { ...state, ascending: !state.ascending};
    case IS_FETCHING:
      return { ...state, isFetching: action.payload};
    case FETCH_MORE_GIPHS_ERROR:
      return { ...state, errorMessage: action.payload, isFetching: false };
    case ON_SUCCESS:
      return { ...state, data: action.payload, isFetching: false };
    case ON_ERROR:
      return { ...state, errorMessage: action.payload, isFetching: false };
    case FETCH_MORE_GIPHS_SUCCESS:
      return { ...state, data: state.data.concat(action.payload), isFetching: false };
    case FETCH_MORE_GIPHS_ERROR:
      return { ...state, errorMessage: action.payload, isFetching: false };
    default:
      return state;
  }
}