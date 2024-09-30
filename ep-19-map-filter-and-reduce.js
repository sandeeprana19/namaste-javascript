// EP-19 | map, filter & reduce 🙏

// map
/*
// USE CASE 1:
const arr=[5, 1, 3, 2, 6];

// Double = [10, 2, 6, 4, 12];

// Triple = [15, 3, 9, 6, 18];

// Binary = ["101", "1", "11", "10", "110"];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2);
}

const output = arr.map(binary)

console.log(output);
*/

/*
// USE CASE 2:
const arr=[5, 1, 3, 2, 6];

const output = arr.map(function binary(x) {
    return x.toString(2);
})

console.log(output);
*/

/*
// USE CASE 2:
const arr=[5, 1, 3, 2, 6];

const output = arr.map((x) => {
    return x.toString(2);
})

console.log(output);
*/

/*
// USE CASE 3:
const arr=[5, 1, 3, 2, 6];

const output = arr.map((x) => x.toString(2))

console.log(output);
*/

// filter
/*
// USE CASE 1:
const arr=[5, 1, 3, 2, 6];

function isOdd(x) {
    return x % 2;
}

const output = arr.filter(isOdd)

console.log(output);
*/

/*
// USE CASE 2:
const arr=[5, 1, 3, 2, 6];

function isEven(x) {
    return x % 2 === 0;
}

const output = arr.filter(isEven)

console.log(output);
*/

/*
// USE CASE 3:
const arr=[5, 1, 3, 2, 6];

function greaterThan4(x) {
    return x > 4;
}

const output = arr.filter(greaterThan4)

console.log(output);
*/

/*
// USE CASE 4:
const arr=[5, 1, 3, 2, 6];

const output = arr.filter(function greaterThan4(x) {
    return x > 4;
})

console.log(output);
*/

/*
// USE CASE 5:
const arr=[5, 1, 3, 2, 6];

const output = arr.filter(x => x > 4)

console.log(output);
*/

/*
// USE CASE 6:
const arr=[5, 1, 3, 2, 6];

const output = arr.filter(x => x < 3)

console.log(output);
*/

// reduce
/*
// USE CASE 1:
const arr=[5, 1, 3, 2, 6];

// sum or max
function findSum(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];        
    }

    return sum;
}

console.log(findSum(arr));
*/

/*
// USE CASE 2:
const arr=[5, 1, 3, 2, 6];

// sum or max
function findSum(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];        
    }

    return sum;
}

console.log(findSum(arr));

const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0)

console.log(output);
*/

/*
// USE CASE 3:
const arr=[5, 1, 3, 2, 6];

// sum or max
function findMax(arr){
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax(arr));
*/

/*
// USE CASE 4:
const arr = [5, 1, 3, 2, 6];

// sum or max
function findMax(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax(arr));

const output = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }

  return max;
}, 0);

console.log(output);
*/

/*
// Advance level map
// USE CASE 1:
const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);
*/

// USE CASE 2:
const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

// { 26 : 2, 75: 1, 50 : 1}

const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(output);
