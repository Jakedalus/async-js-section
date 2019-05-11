
function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
}

const test = [1, 2, 3, 4, 5, 6];

forEach(test, function(number) {
  console.log(number * 2);
});

const msg = ['my', 'forEach', 'example'];

let result = "";
forEach(msg, function(str, index, arr) {
  if (arr.length - 1 === index) {
    result += str + "!!!!";
  } else {
    result += str + " ";
  }
});
console.log(result);