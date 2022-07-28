function slice(arr, start, end) {
  const slicedElements = [];

  if (start >= arr.length) {
    start = arr.length;
  }

  if (end >= arr.length) {
    end = arr.length;
  }

  for (let index = start; index < end; index += 1) {
    slicedElements.push(arr[index]);
  }

  return slicedElements;
}

slice([1, 2, 3], 1, 2); // [2]
slice([1, 2, 3], 2, 0); // []
slice([1, 2, 3], 5, 1); // []
slice([1, 2, 3], 0, 5); // [1, 2, 3]

const arr1 = [1, 2, 3];
slice(arr1, 1, 3); // [2, 3]
console.log(arr1); // [1, 2, 3]

function splice(arr, start, deleteCount, ...elements) {
  const deletedElements = [];

  if (start > arr.length) {
    start = arr.length;
  }

  if (deleteCount > arr.length - 1 - start) {
    deleteCount = arr.length - start;
  }

  let arrCopy = arr.slice();
  let elementCount = elements.length;
  let newLength = arr.length + elementCount - deleteCount;
  arr.length = newLength;

  for (let index = 0; index < elementCount; index += 1) {
    arr[start + index] = elements[index];
  }

  let copyBackCount = arrCopy.length - (start + deleteCount);
  for (let index = 0; index < copyBackCount; index += 1) {
    arr[start + elementCount + index] = arrCopy[start + deleteCount + index]
  }

  return slice(arrCopy, start, start + deleteCount);
}

splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

const arr2 = [1, 2, 3];
splice(arr2, 1, 1, 'two');             // [2]
arr2;                                  // [1, "two", 3]

// DATA STRUCTURES
// Input: Array, integer (starting index), integer (delete count), elements
// Output: Array of deleted elements
// Execution: array to hold deleted elements from given array

// ALGORITHM
// declare variable `deletedElements` and initialize to empty array
// If `start` index is greater than length of given array, set equal to length
// If `deleteCount` is greater than number of elements from `start` to end of array
//  - `deleteCount` = array.length - `start`
// If the optional `elements` argument is empty:
//  - then just remove elements from array and return `deletedElements`
// If `elements` are given:
//  - At `start` index:
//    - if 