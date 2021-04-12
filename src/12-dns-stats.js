/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const data = {};

  for (let i = 0; i < domains.length; i++) {
    const elem = domains[i];
    let strPrev = '';
    let arr = [];
    let arr2 = [];
    let str = '';
    for (let j = elem.length; j >= 0; j--) {
      if (elem[j] !== '.') {
        arr.push(elem[j]);
      }
      if (elem[j] === '.' || j === 0) {
        arr.push('.');
        arr2 = arr.slice();
        arr2.reverse();
        str = arr2.join('');
        strPrev += str;
        str = '';
        arr2 = [];
        arr = [];
        if (typeof data[strPrev] !== 'undefined') {
          data[strPrev]++;
        } else {
          data[strPrev] = 1;
        }
      }
    }
  }
  return data;
}

module.exports = getDNSStats;
