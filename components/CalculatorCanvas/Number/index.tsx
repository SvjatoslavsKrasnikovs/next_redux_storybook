import React from "react";

import { Button } from "../UI/Button";

interface Props {
  pushEvent(children): void
}

export const Number: React.FC<Props> = ({ children, pushEvent }) => {
  return <Button pushEvent={() => pushEvent(children)} label={children.toString()} number></Button>;
};