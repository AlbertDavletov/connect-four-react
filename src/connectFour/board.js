import React, { useCallback } from "react";
import ConnectFourCell from "./cell";
import "./board.css";

const ConnectFourBoard = ({ grid, makeMove }) => {
  console.log("grid: ", grid.length);
  const handleMakeMove = useCallback(
    (index) => {
      makeMove(parseInt(index, 10));
    },
    [makeMove]
  );

  return (
    <div className="connect-four-board">
      {grid.map((row, rowIdx) => (
        <div className="connect-four-row" key={rowIdx}>
          {row.map((cell, columnIdx) => (
            <ConnectFourCell
              key={columnIdx}
              cell={cell}
              cellIndex={columnIdx}
              makeMove={handleMakeMove}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ConnectFourBoard;
