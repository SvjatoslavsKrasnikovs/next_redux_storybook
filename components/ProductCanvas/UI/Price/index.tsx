import React from 'react'

import styles from './index.module.css'

export interface Pros {
  price: number
}

export const Price: React.FC<Pros> = ({ price }) => {
  return (
    <div>
      <h2><span>$</span>{price}</h2>
    </div>
  )
}