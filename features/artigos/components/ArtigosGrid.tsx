import React from "react";
import "./ArtigosGrid.css";

export const ArtigosGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid-container">{children}</div>;
};
