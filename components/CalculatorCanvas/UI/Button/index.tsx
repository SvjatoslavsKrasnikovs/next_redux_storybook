import React from "react";

import styles from "./index.module.css";

export interface Props {
  pushEvent(): void,
  label: string,
  number?: boolean
}

export const Button: React.FC<Props> = ({ label, pushEvent, number }) => {
  let numberButton = number ? styles.numberButton : undefined

  let squareButton = (label === 'clear') ? undefined : styles.buttonSquare

  return (
    <div className={styles.buttonOuter}>
      <button onClick={() => pushEvent()} className={[styles.buttonIner, squareButton, numberButton].join(' ')}>{ label }</button>
    </div>
  );
};
