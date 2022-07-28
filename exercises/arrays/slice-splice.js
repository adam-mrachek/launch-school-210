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

  const end = start + deleteCount;

  for (let index = start; index < end; index += 1) {
    deletedElements.push(arr[index]);
  }

  console.log(deletedElements);
}
