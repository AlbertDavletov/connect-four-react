import Constants from "./constants";

export const checkHorizontally = (grid, row, col) => {
  let points = 1;
  const color = grid[row][col];

  let left = true;
  let right = true;
  for (let i = 1; i <= 3; i++) {
    left = left && col - i >= 0 && grid[row][col - i] === color;
    right =
      right && col + i < Constants.NUM_COLUMNS && grid[row][col + i] === color;

    if (left) {
      points++;
    }
    if (right) {
      points++;
    }

    if (points >= Constants.WIN_POINTS) {
      return true;
    } else if (!left && !right) {
      break;
    }
  }

  return false;
};

export const checkVertically = (grid, row, col) => {
  let points = 1;
  const color = grid[row][col];

  for (let i = row + 1; i < Constants.NUM_ROWS; i++) {
    if (grid[i][col] === color) {
      points++;
    } else {
      break;
    }

    if (points >= Constants.WIN_POINTS) {
      return true;
    }
  }

  return false;
};

export const checkMainDiagonal = (grid, row, col) => {
  let points = 1;
  const color = grid[row][col];
  let up = true;
  let down = true;

  for (let i = 1; i <= 3; i++) {
    up = up && row - i >= 0 && col - i >= 0 && grid[row - i][col - i] === color;
    down =
      down &&
      row + i < Constants.NUM_ROWS &&
      col + i < Constants.NUM_COLUMNS &&
      grid[row + i][col + i] === color;

    if (up) {
      points++;
    }
    if (down) {
      points++;
    }

    if (points >= Constants.WIN_POINTS) {
      return true;
    } else if (!up && !down) {
      break;
    }
  }

  return false;
};

export const checkSubDiagonal = (grid, row, col) => {
  let points = 1;
  const color = grid[row][col];
  let up = true;
  let down = true;

  for (let i = 1; i <= 3; i++) {
    up =
      up &&
      row - i >= 0 &&
      col + i < Constants.NUM_COLUMNS &&
      grid[row - i][col + i] === color;
    down =
      down &&
      row + i < Constants.NUM_ROWS &&
      col - i >= 0 &&
      grid[row + i][col - i] === color;

    if (up) {
      points++;
    }
    if (down) {
      points++;
    }

    if (points >= Constants.WIN_POINTS) {
      return true;
    } else if (!up && !down) {
      break;
    }
  }

  return false;
};
