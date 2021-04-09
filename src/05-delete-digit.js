/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const input = n.toString().split('');
  let swap = 0;
  let res = 0;
  for (let i = 0; i < input.length; i++) {
    const maxLn = input.slice();
    maxLn.splice(i, 1);
    swap = Number(maxLn.join(''));
    if (res === 0) {
      res = Number(maxLn.join(''));
    }
    if (swap > res) {
      res = swap;
    }
  }
  return res;
}

module.exports = deleteDigit;
