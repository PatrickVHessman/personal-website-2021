import React from "react";

const Col = ({ children, size = 1 }) => {
  return <div style={{ flex: size }}>{children}</div>;
};

export default Col;