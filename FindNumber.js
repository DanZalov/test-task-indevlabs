// Let's check the input data
function checkInputArray(arr) {
  // Check if input is an array and its length is at least 2
  if (!Array.isArray(arr) || arr.length < 2) {
    console.log('ERROR: Input should be an array with at least two elements.')
    return false
  }

  // Check if input contains only integers
  for (let num of arr) {
    if (!Number.isInteger(num)) {
      console.log('ERROR: Input array should contain only integers.')
      return false
    }
  }
  return true
}

// The most straightforward way:
function findMissingNumberSort(arr) {
  if (!checkInputArray(arr)) return

  // Sort the array to ensure sequence
  arr.sort((a, b) => a - b)

  // Iterate through the sorted array to find the first missing number
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1
    }
  }

  // If no missing number found
  console.log('NOTE: No missing number.')
  return
}

// The complexity of JavaScript's .sort() method is typically O(n log n) for average and best-case scenarios. But the worst-case time complexity can be O(n^2), particularly if the implementation uses a non-stable sorting algorithm and encounters already sorted or nearly sorted data.
// If we have large input arrays and frequent use cases, it is essential to reduce the complexity of algorithm as much as possible.
// The task can be solved without sorting the array, achieving a linear time complexity of O(n).
function findMissingNumberLinear(arr) {
  if (!checkInputArray(arr)) return

  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let n = max - min + 1
  let seen = new Array(n).fill(false)

  // Mark elements as seen
  for (let num of arr) {
    seen[num - min] = true
  }

  // Find the first missing number
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      return i + min
    }
  }

  // If no missing number found
  console.log('NOTE: No missing number.')
  return
}

const findMissingNumber = findMissingNumberLinear

console.log(findMissingNumber([5, 0, 1, 3, 2])) // Output: 4
console.log(findMissingNumber([7, 9, 10, 11, 12])) // Output: 8
console.log(findMissingNumber([0, 1, 2, 3, 4])) // Output: NOTE: No missing number.
console.log(findMissingNumber([0, 1.2, 3, 4, 5])) // Output: ERROR: Input array should contain only integers.
console.log(findMissingNumber([0])) // Output: ERROR: Input should be an array with at least two elements.
console.log(findMissingNumber([0, -1, -3, -4])) // Output: -2

// If there are a number of missing values, algorithm gives back the smallest
console.log(findMissingNumber([2, 5])) // Output: 3
