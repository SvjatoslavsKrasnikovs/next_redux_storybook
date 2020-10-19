import { combineReducers } from 'redux'
import productReducer from './productReducer'

const reducers = {
  product: productReducer,
}

export default combineReducers(reducers)
