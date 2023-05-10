/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const start = new ListNode();
    let node = start;
    let plusOne = false;
    let sum;

    while (l1 || l2) {
        sum = plusOne ? 1 : 0;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            plusOne = true;
            sum %= 10;
        } else {
            plusOne = false;
        }

        node.next = new ListNode(sum);
        node = node.next;
    }

    if (plusOne) {
        node.next = new ListNode(1);
    }

    return start.next;
};
