import React, { useState } from "react";

import { ProductInfo } from "../UI/ProductInfo";
import { ProductImage } from "../UI/ProductImage";

import styles from "./index.module.css";

interface Props {
  item: Product;
  height: number;
  width: number;
}

const Card: React.FC<Props> = ({ item, height }) => {
  const [activated, setActivated] = useState(false);

  const expantCard = () => {
    setActivated(!activated);
  };

  const activeStyle = activated ? styles.activated : undefined;

  return (
    <div className={[styles.outerCard, activeStyle].join(" ")}>
      <ProductImage
        url={
          "https://images-na.ssl-images-amazon.com/images/I/71qa-wuTe2L._AC_SL1500_.jpg"
        }
        activated={activated}
      />
      <ProductInfo item={item} clickEvent={() => expantCard()} activated={activated}/>
    </div>
  );
};

export default Card;
