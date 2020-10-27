import React, { useEffect, useState } from 'react'

import Row from '../Row'

import styles from './index.module.css'

interface Props {
  products: Product[]
}

const Canvas: React.FC<Props> = ({ products }) => {
  const [numberOfCol, setNumberOfCol] = useState(1)

  useEffect(() => {
    setNumberOfCol((products.length % 3) + 1)
  }, [products.length])

  let chunks: Product[][] = []

  let i, j
  for (i = 0, j = products.length; i < j; i += 3) {
    let chunk = products.slice(i, i + 3)
    chunks.push(chunk)
  }

  if (!products) {
    return <>Empty/Spinner</>
  }

  return (
    <div className={styles.outerCanvas}>
      {chunks.map((item, index) => {
        return <Row key={index} items={item} />
      })}
    </div>
  )
}
export default Canvas
