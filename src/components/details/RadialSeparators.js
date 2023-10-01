import React from "react";

function Separator(props) {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        transform: `rotate(${props.turns}turn)`,
      }}
    >
      <div style={props.style} />
    </div>
  );
}

function RadialSeparators(props) {
  const turns = 1 / props.count;
  const separators = [];

  for (let index = 0; index < props.count; index++) {
    separators.push(
      <Separator key={index} turns={index * turns} style={props.style} />
    );
  }

  return separators;
}

export default RadialSeparators;
