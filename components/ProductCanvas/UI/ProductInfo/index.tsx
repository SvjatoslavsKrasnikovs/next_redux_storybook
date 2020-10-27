import React from "react";

import { ProductName } from "../ProductName";
import { Price } from "../Price";
import { Button } from "../Button";

import styles from "./index.module.css";

interface Props {
  item: Product;
  clickEvent(): void;
  activated: boolean;
}

export const ProductInfo: React.FC<Props> = ({
  item,
  clickEvent,
  activated,
}) => {
  return (
    <div className={styles.productInfo}>
      <ProductName name={item.name} />
      <div className={styles.priceAndButton}>
        <Price price={item.price} />
        <div>
          <Button
            label="See More"
            primary
            size={"medium"}
            onClick={clickEvent}
          />
        </div>
      </div>
    </div>
  );
};
