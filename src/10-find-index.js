/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const size = array.length;
  let leftBorder = Math.ceil((Math.sqrt(size))); // делаем прыжок, это будет его левым краем
  let prevLeftBorder = 0; // переменная для хранения предыдущей границы
  while (array[Math.min(Math.ceil(leftBorder), size) - 1] < value) { // прибавляем шаг
    // до тех пор, пока его граница не будет больше искомого числа
    prevLeftBorder = leftBorder;
    leftBorder += Math.ceil((Math.sqrt(size)));
    if (prevLeftBorder >= size) {
      return -1;
    }
  }
  while (array[prevLeftBorder] < value) { // после нахождения большей
    // границы берем предыдущее значение границы
    prevLeftBorder++; // и выполняем линейный поиск пока не найдем нужный элемент
    if (prevLeftBorder === Math.min(leftBorder, size)) {
      return -1;
    }
  }

  if (array[prevLeftBorder] === value) {
    return prevLeftBorder;
  }
  return -1;
}

module.exports = findIndex;
