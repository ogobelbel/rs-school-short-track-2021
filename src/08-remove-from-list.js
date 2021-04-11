/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function removeKFromList(l, k) {
  let begin = l;
  const equalElem = k;
  // Если удаляемый элемент это begin
  while (begin && begin.value === equalElem) {
    // ставим в начало след элемент
    begin = begin.next;
  }
  let newBegin = begin;
  if (newBegin) {
    while (newBegin.next) {
      if (newBegin.next.value === equalElem) {
        // присваимваем след элементу значение элемента за ним
        newBegin.next = newBegin.next.next;
      } else {
        newBegin = newBegin.next;
      }
    }
  }
  return begin;
}

module.exports = removeKFromList;
