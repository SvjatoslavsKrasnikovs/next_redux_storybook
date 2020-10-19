import React from 'react'

import Card from '../Card'

import styles from './index.module.css'

interface Props {
  item?: Product
}

const Cell: React.FC<Props> = ({item}) => {
  return (
    <div className={styles.outerCell}>
      {item ? <Card item={item}/> : undefined}
    </div>
  )
}

export default Cell