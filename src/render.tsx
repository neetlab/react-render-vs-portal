import React from "react";
import ReactDOM from "react-dom";
import { Component } from "./component";

const main = () => {
  const mountNodes = Array.from({ length: 100 }, (_, i) => {
    return document.getElementById(`div${i + 1}`);
  }).filter((node): node is HTMLElement => !!node);

  mountNodes.forEach((node, i) => {
    ReactDOM.render(<Component text={`i'm ${i}th element`} />, node);
  });
}

main();
