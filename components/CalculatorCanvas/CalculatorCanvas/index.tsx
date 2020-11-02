import React, { useState } from "react";

import styles from "./index.module.css";

import { Results } from "../Results";
import { Operator } from "../Operator";
import { Number } from "../Number";

type Operators = null | "+" | "-" | "*" | "clear" | "/" | "=";

export const CalculatorCanvas: React.FC = () => {
  const [currentInput, setCurrentInput] = useState<string>("");
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const numberPad = [];
  for (let i = 1; i < 10; i++) {
    numberPad.push(
      <Number key={i} pushEvent={(children) => numberPush(children)}>
        {i}
      </Number>
    );
  }

  const clearStore = () => {
    setCurrentInput("");
    setResult(0);
  };

  const expressionEval = (input: string) => {
    // Evaluate if the expression is correct
    // Expression can not start or end with an algebric operator
    const numberRegex = new RegExp("^[0-9]$");
    if (
      !(numberRegex.test(input[0]) && numberRegex.test(input[input.length - 1]))
    ) {
      setError(true);
      return 0;
    }
    // Consequent algebra operations are not accepted, apart from +-

    // Break down into bits and feed to operationEvaluiation(). At shi point, we're almost sure that the expressions are good.
    // let inputCopy = input;
    let numbers: string[] = [];
    let operators: string[] = [];
    let prevElement: string = "1";
    let prevCursor = 0;

    for (let i = 0; i < input.length; i++) {
      if (numberRegex.test(prevElement)) {
        // Last element was a number, default
        if (numberRegex.test(input[i])) {
          // This element is a number, do nothing see the next element.
        } else {
          // This element is not a number
          // This means that previous index is where the number ends
          numbers.push(input.slice(prevCursor, i-1))
          operators.push(input.slice(i, i))
        }
      } else {
        // Last element was not a number
        if (numberRegex.test(input[i])) {
          // This element is a number
          // It seems like we only need to place a cursor here
          prevCursor = i
        } else {
          // This element is not a number(Totally unexpected case)
        }
      }
      prevElement = input[i];
    }
    console.log(numbers)
    console.log(operators)

    // Return expected values
  };

  const operationEvaluation = (
    operator: Operators,
    lhs: number,
    rhs: number
  ): number => {
    let result: number = 0;
    switch (operator) {
      case "+":
        result = lhs + rhs;
        break;
      case "-":
        result = lhs - rhs;
        break;
      case "/":
        result = lhs / rhs;
        break;
      case "*":
        result = lhs * rhs;
        break;
      default:
        break;
    }
    return result;
  };

  const numberPush = (number) => {
    setCurrentInput((currentState: string) => {
      return currentState.concat(number);
    });
  };

  const operatorPush = (operator: Operators) => {
    if (operator === "clear") {
      clearStore();
    } else if (operator === "=") {
      expressionEval(currentInput);
    } else {
      setCurrentInput((currentState: string) => {
        return currentState.concat(operator);
      });
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
