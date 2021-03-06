
// Definition for a binary tree node.
class TreeNode {
  constructor(val) {
    this.val =val
    this.left = this.right = null
  }
}
let createTree = (arr) => {
  let queue1 = [...arr]
  let head  = new TreeNode(queue1.shift())
  let queue2 = [head]
  let temp1, temp2
  while(true) {
    temp2 = queue2.shift()
    if (temp2 === null) {
      queue2.push(queue1.shift())
      queue2.push(queue1.shift())
      continue
    }

    temp1 = queue1.shift()
    if (temp1 !== null) {
      temp2.left = new TreeNode(temp1)
      queue2.push(temp2.left)
    } else {
      queue2.push(null)
    }
    if (queue1.length === 0) return head

    temp1 = queue1.shift()
    if (temp1 !== null) {
      temp2.right = new TreeNode(temp1)
      queue2.push(temp2.right)
    } else {
      queue2.push(null)
    }
    if (queue1.length === 0) return head
  }
}
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// merge the values of t2 and t1 to obtain a new tree（得到一个新树)
// iteration
let mergeToNewTree1 = (t1, t2) => {
  if (t1 === null && t2 !== null) {
    return new TreeNode(t2.val)
  } else if (t1 !== null && t2 === null) {
    return new TreeNode(t1.val)
  } else if (t1 !== null && t2 !== null) {
    let node = new TreeNode(t1.val + t2.val)
    node.left = mergeToNewTree1(t1.left, t2.left)
    node.right = mergeToNewTree1(t1.right, t2.right)
    return node
  } else {
    return null
  }
}


// recursion 
let mergeToNewTree2 = (t1, t2) => {
  let queue = [[t1, t2]], tempArr, arr = []
  while (queue.length !== 0) {
    tempArr = queue.shift()
    if (tempArr[0] !== null && tempArr[1] !== null) {
      queue.push([tempArr[0].left, tempArr[1].left])
      queue.push([tempArr[0].right, tempArr[1].right])
      arr.push(tempArr[0].val + tempArr[1].val)
    } else if (tempArr[0] !== null && tempArr[1] === null) {
      queue.push([tempArr[0].left, null])
      queue.push([tempArr[0].right, null])
      arr.push(tempArr[0].val)
    } else if (tempArr[0] === null && tempArr[1] !== null) {
      queue.push([null, tempArr[1].left])
      queue.push([null, tempArr[1].right])
      arr.push(tempArr[1].val)
    } else {
      arr.push(null)
    }
  }

  let i = arr.length - 1
  while(i >= 0) {
    if (arr[i]) break
    i--
  }
  arr.length = i + 1

  return createTree(arr)
}







// merge t2 into t1 将t2的节点都合并到t1上
// recursion
let mergeTrees1 = (t1, t2) => {
  if (t1 === null && t2 === null) {
    return null
  } else if (t2 !== null && t1 === null) {
    return new TreeNode(t2.val)
  } else if (t1 !== null && t2 === null) {
    return  t1
  } else {
    t1.val += t2.val
    t1.left = mergeTrees1(t1.left, t2.left)
    t1.right = mergeTrees1(t1.right, t2.right)
    return t1
  }
}

// iteration
let mergeTrees2 = (t1, t2) => {
  if (t1 === null) {
    return
  }
  let queue = [[t1, t2]], tempArr
  while (queue.length !== 0) {
    tempArr = queue.shift()
    if (tempArr[1] === null) {
      continue
    } else {
      tempArr[0].val += tempArr[1].val
    }
    if (tempArr[0].left !== null) {
      queue.push([tempArr[0].left, tempArr[1].left])
    } else {
      tempArr[0].left = tempArr[1].left
    }
    if (tempArr[0].right !== null) {
      queue.push([tempArr[0].right, tempArr[1].right])
    } else {
      tempArr[0].right = tempArr[1].right
    }
  }
}




// Example 

