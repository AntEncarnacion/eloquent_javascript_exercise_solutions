function reverseArray(arr) {
  let result_arr = [];
  for (let element of arr) {
    result_arr.unshift(element);
  }
  return result_arr;
}

function reverseArrayInPlace(arr) {
    let size = arr.length;
  for (let i = 0; i < size / 2; i++) {
    let temp = arr[i];
    arr.splice(i, 1, arr[size-1-i]);
    arr.splice(size-1-i, 1, temp);
  }
}