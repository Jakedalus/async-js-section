function findIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  
  return -1;
}

const arr1 = [3, 4, 6, 2, 1];
console.log(findIndex(arr1, function(num) {
  return num === 6;
}));  // 2

const arr2 = [5, 11, 13, 8, 6, 7];
console.log(findIndex(arr2, function(num) {
  return num % 2 === 0;
}));  // 3

const langs = ['Java', 'C++', 'Python', 'Ruby'];
console.log(findIndex(langs, function(str) {
  return str === 'Javascript';
}));  // -1

const langs2 = ['Java', 'C++', 'Python', 'Ruby', 'Javascript'];
console.log(findIndex(langs2, function(str) {
  return str === 'Javascript';
}));  // 4