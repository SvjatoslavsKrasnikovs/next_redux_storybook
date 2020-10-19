import React from 'react'

import styles from './index.module.css'

interface Props {
  name: Product['name']
}

const ProductName = ({ name }) => {
  return (
    <div className={styles.productNameOuter}>
      <div className={styles.productName}>{ name }</div>
    </div>
  )
}

export default ProductName
