import React from "react";

import { CurrentResult } from "../CurrentResult";
import { CurrentInput } from "../CurrentInput";

import styles from "./index.module.css";

export interface Props {
  result: number;
  currentInput: string;
}

export const Results: React.FC<Props> = ({ result, currentInput }) => {
  return (
    <div className={styles.outerResults}>
      <CurrentResult result={result} />
      <CurrentInput currentInput={currentInput} />
    </div>
  );
};
