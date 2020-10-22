import React, {useState, useEffect, useRef} from 'react'

import Card from '../Card'

import styles from './index.module.css'

interface Props {
  item?: Product
}

const Cell: React.FC<Props> = ({item}) => {
  const [height, setHeight] = useState<number>(null)
  const [width, setWidth] = useState<number>(null)
  const cell = useRef(null)

  useEffect(() => {
    setHeight(cell.current.clientHeight)
    setWidth(cell.current.clientWidth)
  })

  console.log(height)

  return (
    <div className={item ? styles.outerCell : styles.outerCellEmpty} ref={cell}>
      {item ? <Card item={item} height={height} width={width}/> : undefined}
    </div>
  )
}

export default Cell