/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const str1 = s1.split('');
  const str2 = s2.split('');
  let res = 0;
  for (let i = 0; i < s1.length; i++) {
    const count = str1[i];
    for (let j = 0; j < s2.length; j++) {
      if (count === str2[j]) {
        res++;
        str2.splice(j, 1);
        j = s2.length;
      }
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
