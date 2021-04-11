/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];
  const data = {};
  for (let i = 0; i < names.length; i++) {
    if (typeof data[names[i]] !== 'undefined') {
      data[names[i]]++;
    } else {
      data[names[i]] = 0;
    }
    if (data[names[i]] === 0) {
      res.push(names[i]);
    } else {
      res.push(`${names[i]}(${data[names[i]]})`);
      if (typeof data[`${names[i]}(${data[names[i]]})`] !== 'undefined') {
        data[`${names[i]}(${data[names[i]]})`]++;
      } else {
        data[`${names[i]}(${data[names[i]]})`] = 0;
      }
    }
  }
  return res;
}

module.exports = renameFiles;
