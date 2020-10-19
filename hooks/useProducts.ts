import { useSelector } from 'react-redux'

const useProducts = () => {
  const products = useSelector((state: RootState) => {
    return state.product.products
  })

  return products
}

export default useProducts