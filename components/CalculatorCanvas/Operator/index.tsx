import React from "react";

import { Button } from "../UI/Button";

interface Props {
  pushEvent(children): void
}

export const Operator: React.FC<Props> = ({ children, pushEvent }) => {
  return <Button pushEvent={() => pushEvent(children)} label={children.toString()} number={false}></Button>;
};
