/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Iteration
let mergeSortedArray1 = (nums1, m, nums2, n) => {
  if (n === 0) return
  let i = m, j = n, k = m + n
  while (i > 0 && j > 0) {
    if (nums1[i - 1] > nums2[j - 1]) {
      nums1[--k] = nums1[--i]
    } else {
      nums1[--k] = nums2[--j]
    }
  }
  while (j > 0) {
    nums1[--k] = nums2[--j]
  }
}

// Recursive
let mergeSortedArray2 = (nums1, n, nums2, m) => {
  if (n === 0) return 
  let i = m, j = n, k = m + n
  if (nums1[i - 1] > nums2[j - 1]) {
    nums1[k - 1] = nums1[i - 1]
    merge(nums1, --i, nums2, j)
  } else {
    nums1[k - 1] = nums2[j - 1]
    merge(nums1, i, nums2, --j)
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