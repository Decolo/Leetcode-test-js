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

// Recusive

var mergeTwoLists1 = function(l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists1(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists1(l2.next, l1)
    return l2
  }
}

// Iteration
var mergeTwoLists2 = function(l1, l2) {
  var pre, head 
  head = pre = new ListNode(-1)
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      pre.next = l1
      l1 = l1.next
    } else {
      pre.next = l2
      l2 = l2.next
    }
    pre = pre.next
  }
  pre.next = l1 === null ? l2 : l1
  return head.next
}

// return a new ListNode instance
var mergeTwoLists3 = function(l1, l2) {
  var newList, current
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  } 
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



