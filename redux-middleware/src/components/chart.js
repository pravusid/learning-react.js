import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

export default props => {
  return (
    <Sparklines height={120} width={100} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="mean" />
    </Sparklines>
  );
};
