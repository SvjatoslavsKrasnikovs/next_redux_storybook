import React from 'react'

import styles from './index.module.css'

export interface Props {
  url: string
}

export const ProductImageSmall:React.FC<Props> = ({ url }) => {
  return (
    <div className={[styles.outerImageSmall].join(' ')}>
      <img
        className={[styles.productImage].join(' ')}
        src={url}
      />
    </div>
  )
}

export const ProductImageActive:React.FC<Props> = ({ url }) => {
  return (
    <div className={[styles.outerImageLarge].join(' ')}>
      <img
        className={[styles.productImage].join(' ')}
        src={url}
      />
    </div>
  )
}
