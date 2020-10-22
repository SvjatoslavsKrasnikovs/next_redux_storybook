import React from 'react'

import styles from './index.module.css'

export interface Props {
  url: string
}

export const ProductImage:React.FC<Props> = ({ url }) => {
  return (
    <div className={styles.outerCard}>
      <img
        src={url}
      />
    </div>
  )
}
