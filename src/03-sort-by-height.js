/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let storage = 0;
  const array = arr.slice();
  let iter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      iter = j;
      if (array[j + 1] === -1 && array[j] !== -1) {
        storage = array[j];

        while (array[j + 1] === -1) {
          j++;
        }
        if (array[iter] > array[j + 1]) {
          array[iter] = array[j + 1];
          array[j + 1] = storage;
        }
      }
      if (array[j] > array[j + 1] && array[j] !== -1) {
        storage = array[j];
        array[j] = array[j + 1];
        array[j + 1] = storage;
      }
    }
  }
  return array;
}

module.exports = sortByHeight;
