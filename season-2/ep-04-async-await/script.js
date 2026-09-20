// EP-04 | Async await

/*
// USE CASE 1:
// async always return a promise
async function getData() {
  return "Namaste";
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));
*/

/*
// USE CASE 2:
const p = new Promise(function (resolve, reject) {
  resolve("Promise resolved value!!");
});

// async always return a promise
async function getData() {
  return p;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));
*/

/*
// USE CASE 3:
const p = new Promise(function (resolve, reject) {
  resolve("Promise resolved value!!");
});

// await function can only be resolved inside an async function
async function handlePromise() {
  const val = await p;
  console.log(val);
}

handlePromise();
*/

/*
// USE CASE 4:
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 10000);
});

function getData() {
  // JS engine will not wait for promise to be resolved
  p.then((res) => console.log(res));
  console.log("Namaste JavaScript");
}

getData();
*/

/*
// USE CASE 5:
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 10000);
});

// await function can only be resolved inside an async function
async function handlePromise() {
  console.log("Hello World");
  // JS engine was waiting for promise to resolved
  const val = await p;
  console.log("Namaste JavaScript");
  console.log(val);
}

handlePromise();

// function getData() {
//   // JS engine will not wait for promise to be resolved
//   p.then((res) => console.log(res));
//   console.log("Namaste JavaScript");
// }

// getData();
*/

/*
// USE CASE 6:
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 10000);
});

// await function can only be resolved inside an async function
async function handlePromise() {
  console.log("Hello World");
  // JS engine was waiting for promise to resolved
  const val = await p;
  console.log("Namaste JavaScript");
  console.log(val);

  const val2 = await p;
  console.log("Namaste JavaScript 2");
  console.log(val2);
}

handlePromise();
*/

/*
// USE CASE 7:
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 10000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 5000);
});

// await function can only be resolved inside an async function
async function handlePromise() {
  console.log("Hello World");
  // JS engine was waiting for promise to resolved
  const val = await p1;
  console.log("Namaste JavaScript");
  console.log(val);

  const val2 = await p2;
  console.log("Namaste JavaScript 2");
  console.log(val2);
}

handlePromise();
*/

/*
// USE CASE 8:
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 10000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 20000);
});

// await function can only be resolved inside an async function
async function handlePromise() {
  console.log("Hello World");
  // JS engine was waiting for promise to resolved
  const val = await p1;
  console.log("Namaste JavaScript");
  console.log(val);

  const val2 = await p2;
  console.log("Namaste JavaScript 2");
  console.log(val2);
}

handlePromise();
*/

/*
// USE CASE 9:
const API_URL = "https://api.github.com/users/sandeeprana19";

async function handlePromise() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);
}

handlePromise();
*/

/*
// USE CASE 10:
const API_URL = "https://invalidrandomurl";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
*/

/*
// USE CASE 11:
const API_URL = "https://invalidrandomurl";

async function handlePromise() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);
}

handlePromise().catch((err) => console.log(err));
*/