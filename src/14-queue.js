// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.dlina = 0;
    this.top = null;
    this.last = null;
  }

  get size() {
    return this.dlina;
  }

  enqueue(e) {
    const elem = new ListNode(e);
    if (!this.top) {
      this.top = elem;
      this.last = elem;
    } else {
      this.last.next = elem;
      this.last = elem;
    }
    this.dlina++;
  }

  dequeue() {
    const elem = this.top;
    if (this.top.next) {
      this.top = this.top.next;
      this.dlina--;
    }
    return elem.value;
  }
}

module.exports = Queue;
