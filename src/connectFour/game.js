import React, { useState } from "react";
import Constants from "../constants";
import ConnectFourBoard from "./board";
import {
  checkHorizontally,
  checkVertically,
  checkMainDiagonal,
  checkSubDiagonal
} from "../utils";
import "./styles.css";

const ConnectFour = () => {
  // NUM_ROWS = 6, NUM_COLUMNS = 7, EMPTY = 0:
  // grid: [
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [2, 2, 1, 0, 0, 0, 0],
  //   [2, 1, 2, 0, 0, 0, 0],
  //   [1, 1, 2, 0, 0, 0, 0],
  // ]
  const [columnHeights, setColumnHeight] = useState(
    Array(Constants.NUM_COLUMNS).fill(0)
  );
  const [currPlayer, setCurrPlayer] = useState(Constants.RED);

  const [grid, setGrid] = useState(
    Array(Constants.NUM_ROWS)
      .fill(null)
      .map(() => Array(Constants.NUM_COLUMNS).fill(Constants.EMPTY))
  );

  const hasAnyMove = (columnIdx) => {
    return grid && grid.length > 0 && grid[0].length === Constants.NUM_COLUMNS
      ? grid[0][columnIdx] === 0
      : false;
  };

  const makeMove = (col) => {
    if (hasAnyMove(col)) {
      columnHeights[col] += 1;
      const row = Constants.NUM_ROWS - columnHeights[col];
      grid[row][col] = currPlayer;

      setCurrPlayer(
        currPlayer === Constants.RED ? Constants.BLACK : Constants.RED
      );

      checkGameEnd(row, col);
    }
  };

  const checkGameEnd = (row, col) => {
    const color = grid[row][col];

    if (
      checkHorizontally(grid, row, col) ||
      checkVertically(grid, row, col) ||
      checkMainDiagonal(grid, row, col) ||
      checkSubDiagonal(grid, row, col)
    ) {
      checkAndShowWinner(color);
    }
  };

  const checkAndShowWinner = (color) => {
    const winner = color === Constants.RED ? "Red" : "Black";
    const message = `${winner} player is a winner!`;
    console.log(message);
    alert(message);
    restart();
    return;
  };

  const restart = () => {
    setColumnHeight(Array(Constants.NUM_COLUMNS).fill(0));
    setCurrPlayer(Constants.RED);
    setGrid(
      Array(Constants.NUM_ROWS)
        .fill(null)
        .map(() => Array(Constants.NUM_COLUMNS).fill(Constants.EMPTY))
    );
  };

  return (
    <div className="main">
      <div className="title">Connect 4</div>
      <ConnectFourBoard grid={grid} makeMove={makeMove} />
    </div>
  );
};

export default ConnectFour;
