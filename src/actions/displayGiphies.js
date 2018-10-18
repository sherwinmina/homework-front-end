import { 
  ORDER_BY,
  IS_FETCHING,
  ON_SUCCESS,
  ON_ERROR
 } from './types'

import { fetchGiphies } from '../api'

export const displayGiphies = (searchValue) => dispatch => {
  dispatch(isFetching(true))
  fetchGiphies(searchValue)
    .then( res => {
      dispatch(onSuccess(res.data))
    })
    .catch( 
      err => dispatch(onError(err)) 
    ) 
}

export const orderBy = () => ({
  type: ORDER_BY
})

const isFetching = (boolean) => {
  return {
    type: IS_FETCHING,
    payload: boolean
  }
}

const onSuccess = (response) => {
  return {
    type: ON_SUCCESS,
    payload: response.data
  }
}

const onError = (err) => {
  return {
    type: ON_ERROR,
    payload: err
  }
}