import React from 'react'

import styles from './index.module.css'

export interface Props {
  name: Product['name']
}

export const ProductName = ({ name }) => {
  return (
    <div className={styles.productNameOuter}>
      <div className={styles.productName}>{ name }</div>
    </div>
  )
}
