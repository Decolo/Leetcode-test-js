// Definition for singly-linked list.
function ListNode(val) {
  this.val = val
  this.next = null
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var newList, current
  if (l1 === null || l2 === null) return 
  if (l1.val < l2.val) {
    newList = current = new ListNode(l1.val)
    l1 = l1.next
  } else {
    newList = current = new ListNode(l2.val)
    l2 = l2.next
  }
  while (l1 === null || l2 === null) {
    if (l1.val < l2.val) {
      current.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      current.next = new ListNode(l2.val)
      l2 = l2.next
    }
    current = current.next
  }
  if (l1 === null) {
    current.next = l2
  } else {
    current.next = l1
  }
  return newList
}

