import React from 'react'

import ProductName from '../UI/ProductName'
// import Button from '../UI/Button/Button'

import styles from './index.module.css'

interface Props {
  item: Product
}

const Card: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.outerCard}>
      <img
        src={
          'https://images-na.ssl-images-amazon.com/images/I/71qa-wuTe2L._AC_SL1500_.jpg'
        }
      />
      <ProductName name={item.name} />
      <h2>{item.price}</h2>
      {/* <Button /> */}
    </div>
  )
}

export default Card
