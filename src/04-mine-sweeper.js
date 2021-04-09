/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let count = 0;
  const arr = matrix.slice();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === true) {
        arr[i][j] = 33;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if ((arr[i][j] !== 33) && ((i !== 0 && arr[i - 1][j] === 33)
      || (i !== matrix.length - 1 && arr[i + 1][j] === 33)
      || (j !== 0 && arr[i][j - 1] === 33) || (j !== matrix.length - 1 && arr[i][j + 1] === 33)
      || (i !== 0 && j !== 0 && arr[i - 1][j - 1] === 33)
      || (i !== matrix.length - 1 && j !== matrix.length - 1 && arr[i + 1][j + 1] === 33)
      || (i !== 0 && j !== matrix.length - 1 && arr[i - 1][j + 1] === 33)
      || (j !== 0 && i !== matrix.length - 1 && arr[i + 1][j - 1] === 33))) {
        if (i !== 0 && arr[i - 1][j] === 33) {
          count++;
        }
        if (i !== matrix.length - 1 && arr[i + 1][j] === 33) {
          count++;
        }
        if (j !== 0 && arr[i][j - 1] === 33) {
          count++;
        }
        if (j !== matrix.length - 1 && arr[i][j + 1] === 33) {
          count++;
        }
        if (i !== 0 && j !== 0 && arr[i - 1][j - 1] === 33) {
          count++;
        }
        if (i !== matrix.length - 1 && j !== matrix.length - 1 && arr[i + 1][j + 1] === 33) {
          count++;
        }
        if (i !== 0 && j !== matrix.length - 1 && arr[i - 1][j + 1] === 33) {
          count++;
        }
        if (j !== 0 && i !== matrix.length - 1 && arr[i + 1][j - 1] === 33) {
          count++;
        }
        arr[i][j] = count;
        count = 0;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 33) {
        arr[i][j] = 1;
      }
    }
  }
  return arr;
}

module.exports = minesweeper;
