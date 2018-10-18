import { 
  IS_FETCHING,
  FETCH_MORE_GIPHS_SUCCESS,
  FETCH_MORE_GIPHS_ERROR
 } from './types'

import { fetchGiphies } from '../api'


export const displayMore = (searchValue, offSetValue) => dispatch => {
  dispatch(isFetching(true))
  fetchGiphies(searchValue, offSetValue)
    .then( res => {
      dispatch(onSuccess(res.data))
    })
    .catch( 
      err => dispatch(onError(err)) 
    ) 
}


const isFetching = (boolean) => {
  return {
    type: IS_FETCHING,
    payload: boolean
  }
}

const onSuccess = (response) => {
  return {
    type: FETCH_MORE_GIPHS_SUCCESS,
    payload: response.data
  }
}

const onError = (err) => {
  return {
    type: FETCH_MORE_GIPHS_ERROR,
    payload: err
  }
}
