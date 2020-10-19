import React from 'react'

import styles from './index.module.css'

import Cell from '../Cell'

interface Props {
  items: Product[]
}

const Row: React.FC<Props> = ({ items }) => {
  return (
    <div className={styles.outerRow}>
      <Cell item={items[0] ? items[0] : undefined} />
      <Cell item={items[1] ? items[1] : undefined} />
      <Cell item={items[2] ? items[2] : undefined} />
    </div>
  )
}

export default Row
