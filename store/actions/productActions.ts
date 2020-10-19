import * as types from './actionTypes'
import axios from '../../axios-fetch'

// PROCEDURE OF FETCHING ALL PRODUCTS
export const fetchProduct = () => {
  return (dispatch) => {
    dispatch(startProductFetch())
    axios
      .get('https://ssddemo-4d841.firebaseio.com/ssd_product.json')
      .then((response) => {
        dispatch(setProduct(response.data))
        dispatch(stopProductFetch())
      })
      .catch((error) => {
        dispatch(fetchProductError())
      })
  }
}

// ENABLES LOADING INDICATOS
export const startProductFetch = () => {
  return {
    type: types.START_PRODUCT_FETCH,
  }
}

// DISABLES LOADING INDICATOR
export const stopProductFetch = () => {
  return {
    type: types.STOP_PRODUCT_FETCH,
  }
}

// STORES FETCHED PRODUCTS IN REDUX STATE
export const setProduct = (products: Product[]) => {
  let product_array: Product[] = []
  products.forEach((product) => {
    product_array.push(product)
  })
  return {
    type: types.SET_PRODUCT,
    payload: product_array,
  }
}

// ENABLES ERROR INDICATOR
export const fetchProductError = () => {
  return {
    type: types.FETCH_PRODUCT_ERROR,
  }
}
