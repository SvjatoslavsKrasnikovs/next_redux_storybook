import React from 'react'

import styles from './index.module.css'

export interface Props {
  url: string,
  activated: boolean
}

export const ProductImage:React.FC<Props> = ({ url, activated }) => {
  const activeStyle = activated ? styles.activated : undefined
  return (
    <div className={[styles.outerCard, activeStyle].join(' ')}>
      <img
        src={url}
      />
    </div>
  )
}
