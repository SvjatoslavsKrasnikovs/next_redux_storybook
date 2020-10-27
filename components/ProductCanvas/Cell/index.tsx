import React, {useState, useEffect, useRef} from 'react'

import Card from '../Card'

import styles from './index.module.css'

interface Props {
  item?: Product
  deactivateRow(): void
  cellIndex: number
  deactivateCard: boolean
}

const Cell: React.FC<Props> = ({item, deactivateRow, cellIndex, deactivateCard}) => {
  return (
    <div className={item ? styles.outerCell : styles.outerCellEmpty}>
      {item ? <Card item={item} deactivateRow={() => deactivateRow()} cellIndex={cellIndex} deactivateCard={deactivateCard}/> : undefined}
    </div>
  )
}

export default Cell