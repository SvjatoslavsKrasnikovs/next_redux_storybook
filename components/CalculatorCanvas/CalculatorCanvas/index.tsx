import React, { useState } from "react";

import styles from "./index.module.css";

import { Results } from "../Results";
import { Operator } from "../Operator";
import { Number } from "../Number";

export const CalculatorCanvas: React.FC = () => {
  const [runningLine, setRunningLine] = useState("");
  const [result, setResult] = useState(null);

  const numberPad = [];
  for (let i = 1; i < 10; i++) {
    numberPad.push(
      <Number key={i} pushEvent={(children) => numberPush(children)}>
        {i}
      </Number>
    );
  }

  const numberPush = (number) => {
    console.log(`number pushed ${number}`);
  };

  const operatorPush = (operator) => {
    console.log(`operator ${operator} pressed`);
  };

  return (
    <div className={styles.outerCanvasContainer}>
      <div className={styles.innerCanvasContainer}>
        <div className={styles.Results}>
          <Results />
        </div>
        <div className={styles.Clear}>
          <Operator pushEvent={(children) => operatorPush(children)}>
            clear
          </Operator>
        </div>
        <div className={styles.Equal}>
          <Operator pushEvent={(children) => operatorPush(children)}>
            =
          </Operator>
        </div>
        <div className={styles.Plus}>
          <Operator pushEvent={(children) => operatorPush(children)}>
            +
          </Operator>
        </div>
        <div className={styles.Minus}>
          <Operator pushEvent={(children) => operatorPush(children)}>
            -
          </Operator>
        </div>
        <div className={styles.Divide}>
          <Operator pushEvent={(children) => operatorPush(children)}>
            /
          </Operator>
        </div>
        <div className={styles.Multiply}>
          <Operator pushEvent={(children) => operatorPush(children)}>
            *
          </Operator>
        </div>
        <div className={styles.Number}>
          {numberPad.map((item) => {
            return item;
          })}
        </div>
      </div>
    </div>
  );
};
