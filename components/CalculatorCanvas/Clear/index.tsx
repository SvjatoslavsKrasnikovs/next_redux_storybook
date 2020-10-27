import React from "react";

import { Button } from "../UI/Button";

interface Props {
  pushEvent(children): void
}

export const Clear: React.FC<Props> = ({ children, pushEvent }) => {
  return <Button pushEvent={() => pushEvent(children)}>{children}</Button>;
};
