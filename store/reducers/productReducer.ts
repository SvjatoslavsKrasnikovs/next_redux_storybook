import * as types from '../actions/actionTypes'

const initialProductState: ProductStore = {
  isLoading: false,
  error: false,
  products: [],
}

const productReducer = (state = initialProductState, { type, payload }) => {
  switch (type) {
    case types.SET_PRODUCT:
      return {
        ...state,
        products: payload,
      }
    case types.START_PRODUCT_FETCH:
      return {
        ...state,
        isLoading: true,
      }
    case types.STOP_PRODUCT_FETCH:
      return {
        ...state,
        isLoading: false,
      }
    case types.FETCH_PRODUCT_ERROR:
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
}

export default productReducer
