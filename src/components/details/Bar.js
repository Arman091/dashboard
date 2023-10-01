import React from "react";
import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import RadialSeparators from "./RadialSeparators";

const Bar = (props) => (
  <CircularProgressbarWithChildren
    value={props.barCount}
    strokeWidth={10}
    styles={buildStyles({
      strokeLinecap: "butt",
      textSize: "10px",
      textColor: "black",
    })}
  >
    <p className="text-3xl font-semibold  font-sans relative bottom-3">
      {props.value}
    </p>
    <p className="text-base font-semibold  font-sans relative bottom-2">
      {props.text}
    </p>
    <RadialSeparators
      count={12}
      style={{
        background: "#fff",
        width: "2px",
        // This needs to be equal to props.strokeWidth
        height: `${10}%`,
      }}
    />
  </CircularProgressbarWithChildren>
);
export default Bar;
