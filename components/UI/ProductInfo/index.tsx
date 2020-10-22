import React from 'react'

import { ProductName } from "../ProductName";
import { Price } from '../Price'
import { Button } from "../Button";

import styles from './index.module.css'

interface Props {
  item: Product,
  clickEvent(): void,
  activated: boolean
}

export const ProductInfo: React.FC<Props> = ({ item, clickEvent, activated }) => {
  const activatedStyle = activated ? styles.activated : undefined
  return (
    <div className={[styles.ProductInfoOuter].join(' ')}>
      <ProductName name={item.name} />
      <div className={[styles.priceButtonCard].join(' ')}>
        <Price price={item.price} />
        <div className={styles.buttonContainer}>
          <Button
            label="See More"
            primary
            size={"medium"}
            onClick={clickEvent}
          />
        </div>
      </div>
    </div>
  )
}
