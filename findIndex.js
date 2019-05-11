function findIndex(arr, callback) {

}

const arr1 = [3, 4, 6, 2, 1];
findIndex(arr1, function(num) {
  return num === 6;
});

const arr2 = [5, 11, 13, 8, 6, 7];
findIndex(arr2, function(num) {
  return num % 2 === 0;
});

const langs = ['Java', 'C++', 'Python', 'Ruby'];
findIndex(langs, function(str) {
  return str === 'Javascript';
});

const langs2 = ['Java', 'C++', 'Python', 'Ruby', 'Javascript'];
findIndex(langs2, function(str) {
  return str === 'Javascript';
});