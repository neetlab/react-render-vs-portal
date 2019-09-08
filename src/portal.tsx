import React from "react";
import ReactDOM from "react-dom";
import { Component } from "./component";

const PortalContainer = () => {
  const mountNodes = Array.from({ length: 100 }, (_, i) => {
    return document.getElementById(`div${i + 1}`);
  }).filter((node): node is HTMLElement => !!node);

  const portals = mountNodes.map((node, i) => {
    return ReactDOM.createPortal(<Component text={`i'm ${i}th element`} />, node);
  });

  return <>{portals}</>;
};

const main = () => {
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) {
    return;
  }

  ReactDOM.render(<PortalContainer />, portalRoot);
};

main();
