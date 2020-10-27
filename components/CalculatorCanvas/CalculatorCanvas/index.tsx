import React, { useState } from "react";

import styles from "./index.module.css";

import { Results } from "../Results";
import { Operator } from "../Operator";
import { Number } from "../Number";

type Operators = null | '+' | '-' | '*' | 'clear' | '/' | '='

export const CalculatorCanvas: React.FC = () => {
  const [currentInput, setCurrentInput] = useState<string>("");
  const [result, setResult] = useState<number>(0);
  const [resultMem, setResultMem] = useState<number>(0);
  const [operatorPrev, setOperatorPrev] = useState<Operators>(null)

  const numberPad = [];
  for (let i = 1; i < 10; i++) {
    numberPad.push(
      <Number key={i} pushEvent={(children) => numberPush(children)}>
        {i}
      </Number>
    );
  }

  const numberPush = (number) => {
    setCurrentInput((currentState) => {
      return currentState.concat(number);
    });
    console.log(`number pushed ${number}`);
  };

  const operatorPush = (operator: Operators) => {
    if (operator === 'clear') {
      setCurrentInput('')
      setResult(0)
      setOperatorPrev(null)
      setResultMem(0)
    }
    else if (operator === '=') {
      switch(operatorPrev) {
        case '+':
          setResult(resultMem + parseInt(currentInput))
          setOperatorPrev(null)
          setCurrentInput('')
          setResultMem(0)
          break
        case '-':
          setResult(resultMem - parseInt(currentInput))
          setOperatorPrev(null)
          setCurrentInput('')
          setResultMem(0)
          break
        case '*':
          setResult(resultMem * parseInt(currentInput))
          setOperatorPrev(null)
          setCurrentInput('')
          setResultMem(0)
          break
        // Implement null check
        case '/':
          setResult(resultMem / parseInt(currentInput))
          setOperatorPrev(null)
          setCurrentInput('')
          setResultMem(0)
          break
        default:
          setResult(0)
          setOperatorPrev(null)
          setCurrentInput('')
          setResultMem(0)
          break
      }

    }
    // Algebra Operator 
    else {
      if (currentInput.length === 0) {
        setOperatorPrev(operator)
        setCurrentInput('')
        setResultMem(result)
      } else {
        setOperatorPrev(operator)
        setResultMem(parseInt(currentInput))
        setCurrentInput('')
      }
    }
  };

  return (
    <div className={styles.outerCanvasContainer}>
      <div className={styles.innerCanvasContainer}>
        <div className={styles.Results}>
          <Results result={result} currentInput={currentInput} />
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
