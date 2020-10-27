import React from "react";

import styles from "./index.module.css";

export interface Props {
  result: number;
}

export const CurrentResult = ({ result }) => {
  return <div className={styles.currentResultWrapper}>
    <div className={styles.CurrentResult}>{result}</div></div>;
};
