import React from 'react'

import ProductName from '../UI/ProductName'
import { Button } from '../UI/Button'

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
      <div className={styles.priceButtonCard}>
        <h2>{item.price}</h2>
        <div className={styles.buttonContainer}>
          <Button label="Hello" primary></Button>
        </div>
      </div>
    </div>
  )
}

export default Card
