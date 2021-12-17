import React from "react";
import Constants from "../constants";
import "./cell.css";

const ConnectFourCell = ({ cell, cellIndex, makeMove }) => {
  const renderCell = (cellValue) => {
    if (cellValue === Constants.RED) {
      return (
        <span role="img" aria-label="red-piece" className="piece red-piece">
          🔴
        </span>
      );
    } else if (cellValue === Constants.BLACK) {
      return (
        <span role="img" aria-label="black-piece" className="piece black-piece">
          ⚫
        </span>
      );
    } else {
      return (
        <span role="img" aria-label="empty-piece" className="piece empty-piece">
          ⚪
        </span>
      );
    }
  };

  return (
    <div className="connect-four-cell" onClick={() => makeMove(cellIndex)}>
      {renderCell(cell)}
    </div>
  );
};

export default ConnectFourCell;
