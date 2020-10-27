import React, { useState } from "react";

import { ProductInfo } from "../UI/ProductInfo";
import { ProductImageSmall, ProductImageActive } from "../UI/ProductImage";

import styles from "./index.module.css";

interface Props {
  item: Product;
  deactivateRow(): void,
  cellIndex: number
  deactivateCard: boolean
}

const Card: React.FC<Props> = ({ item, deactivateRow, cellIndex, deactivateCard }) => {
  const [activated, setActivated] = useState(false);

  const expantCard = () => {
    setActivated(!activated);
    deactivateRow()
  };

  const deactivatedStyle = deactivateCard ? styles.smallDeactivated : undefined

  const smallElement = (
    <div className={[styles.smallElement, deactivatedStyle].join(' ')}>
      <ProductImageSmall
        url={
          "https://images-na.ssl-images-amazon.com/images/I/71qa-wuTe2L._AC_SL1500_.jpg"
        }
      />
      <ProductInfo
        item={item}
        clickEvent={() => expantCard()}
        activated={activated}
      />
    </div>
  );

  const cellIndexPercent = `-${cellIndex*100}%`

  const activeElement = (
    <div className={styles.activeElement} style={{ left: cellIndexPercent }}>
      <ProductImageActive
        url={
          "https://images-na.ssl-images-amazon.com/images/I/71qa-wuTe2L._AC_SL1500_.jpg"
        }
      />
      <ProductInfo
        item={item}
        clickEvent={() => expantCard()}
        activated={activated}
      />
    </div>
  );

  const currentElement = activated ? activeElement : smallElement
  const cardWrapper = activated ? styles.activated : styles.deactivated

  return (
    <div className={[cardWrapper, styles.hasBorder].join(' ')}>
      {currentElement}
    </div>
  );
};

export default Card;
