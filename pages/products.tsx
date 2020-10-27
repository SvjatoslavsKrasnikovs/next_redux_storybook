import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useProducts } from '../hooks/index'
import { fetchProduct } from '../store/actions/actions'

import Canvas from '../components/ProductCanvas/Canvas'

const Products = () => {
  const products = useProducts()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProduct())
  },[])
  return <Canvas products = { products }/>
}

export default Products
