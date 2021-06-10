import React from "react";

const Row = ({ children }) => {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap" }} className="mobileCollapse">{children}</div>
  );
};

export default Row;