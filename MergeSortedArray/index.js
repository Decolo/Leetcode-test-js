/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Iteration

let mergeSortedArray1 = (num1, n, num2, m) => {
  let i = n, j = m, k = m + n
  while (i > 0 && j > 0) {
    if (num1[i - 1] > num2[j - 1]) {
      num1[k--] = num1[i--]
    } else {
      num1[k--] = num2[j--]
    }
  }
  while (j > 0) {
    num1[k--] = num2[j--]
  }
}

// Recursive

let mergeSortedArray2 = (num1, n, num2, m) => {
  let i = n, j = m, k = m + n
  if (num1[i - 1] > num2[j - 1]) {
    num1[k - 1] = num1[i - 1]
    mergeSortedArray2(num1, --i, num2, j)
  } else {
    num1[k - 1] = num2[j - 1]
    mergeSortedArray2(num1, i, num2, --j)
  }
}

// Initial solution. Um...It seems a wrong solution
let mergeSortedArray3 = (num1, n, num2, m) => {
  let lenOfNum1, temp, i
  lenOfNum1 = n
  // Insertion Sort
  while (m > -1) {
    temp = num2[m - 1]
    i = lenOfNum1
    while (i > 0 && num1[i - 1] > temp) {
      num1[i] = num1[i - 1]
      i--
    }
    num1[i] = temp
    lenOfNum1++
    m--
    debugger
  }
  return num1
}