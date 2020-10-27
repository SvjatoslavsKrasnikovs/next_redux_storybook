import React, {useState} from 'react'

import styles from './index.module.css'

import Cell from '../Cell'

interface Props {
  items: Product[]
}

const Row: React.FC<Props> = ({ items }) => {
  const [active, setActive] = useState([false, false, false])

  const deactivateRowOne = () => {
    setActive([!active[0], false, false])
  }

  const deactivateRowTwo = () => {
    setActive([false, !active[1], false])
  }

  const deactivateRowThree = () => {
    setActive([false, false, !active[2]])
  }

  return (
    <div className={styles.outerRow}>
      <Cell item={items[0] ? items[0] : undefined} deactivateRow={() => deactivateRowOne()} cellIndex={0} deactivateCard={active[0]}/>
      <Cell item={items[1] ? items[1] : undefined} deactivateRow={() => deactivateRowTwo()} cellIndex={1} deactivateCard={active[1]}/>
      <Cell item={items[2] ? items[2] : undefined} deactivateRow={() => deactivateRowThree()} cellIndex={2} deactivateCard={active[2]}/>
    </div>
  )
}

export default Row
