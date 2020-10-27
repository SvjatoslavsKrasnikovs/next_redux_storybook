import React from "react";

import styles from "./index.module.css";

export interface Props {
  currentInput: string;
}

export const CurrentInput = ({ currentInput }) => {
  return <div className={styles.currentInputWrapper}>
    <div className={styles.currentInput}>{currentInput}</div></div>;
};
