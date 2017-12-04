
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */



let mergeTree2 = (t1, t2) => {
  if (t2 === null || t1 === null) {
    return
  }
  let queue = [], tempArr
  queue.push([t1, t2])
  while (stack.length !== 0) {
    tempArr = queue.shift()
    if (tempArr[0] === null && tempArr[1] === null) {
      continue
    } else {
      if (tempArr[0].left === null) {
        tempArr[0].left = tempArr[1].left
      } else {
        stack.push([tempArr[0].left, tempArr[1].left])
      }
      if (tempArr[0].right === null) {
        tempArr[0].right = tempArr[1].right
      } else {
        stack.push([tempArr[0].right, tempArr[1].right])
      }
      tempArr[0].val += tempArr[1].val
    }
  } 
}


let mergeTrees3 = (t1, t2) => {
  // get all node's values of t2
  if (t2 === null) {
    return
  } else {
    let queue2 = [t2], arr2Val = [], node
    while (queue2.length !== 0) {
      node = queue2.shift()
      if (node === null) {
        arr2Val.push(0)
        // direct to next loop
        continue
      } else {
        arr2Val.push(node.val)
      }
      if (node.left !== null || node.right !== null) {
        queue2.push(node.left)
        queue2.push(node.right)
      }
    }
  }

  if (t1 === null) {
    t1 = new TreeNode(t2.val)
    return
  } else {
    let queue1 = [t1], arr1 = [arr2Val.shift()]
    while (arr2Val.length !== 0) {
      node = queue1.shift()
      node.val += arr1.shift()
      if (node.left !== null) {
        queue1.push(node.left)
        arr1.push(arr2Val.shift())
      } else {
        node.left = new TreeNode(arr2Val.shift())
      }
      if (node.right !== null) {
        queue1.push(node.right)
        arr1.push(arr2Val.shift())
      } else {
        node.right = new TreeNode(arr2Val.shift())
      }
    }
  }
}