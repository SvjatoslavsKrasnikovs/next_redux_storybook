interface PPS {
  products: []
}

interface RootState {
  product: ProductStore
}

interface ProductStore {
  isLoading: boolean,
  error: boolean,
  products: Product[] | []
}

interface Product {
  brand: string,
  capacity: number,
  name: string,
  price: number,
  product_id: string
}