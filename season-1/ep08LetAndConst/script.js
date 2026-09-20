// EP-08 | let & const in JS 🔥Temporal Dead Zone
// USE CASE 1:
/*
console.log(b);
let a = 10;
var b = 100;
*/

// USE CASE 2:
/*
console.log(a);
let a = 10;
var b = 100;
*/

// USE CASE 3:
/*
let a = 10;
console.log(a);
var b = 100;
*/

// USE CASE 4:
/*
let a = 10;
let a = 100;
*/

// USE CASE 5:
/*
console.log("sdafsadf");
let a = 10;
let a = 100;
*/

// USE CASE 6:
/*
console.log("sdafsadf");
let a = 10;
var a = 100;
*/

// USE CASE 7:
/*
console.log("sdafsadf");
let a = 10;
var b = 100;
var b = 1000;
*/

// USE CASE 8:
/*
let a = 10;
const b = 1000;
*/

// USE CASE 8:
/*
let a;
const b = 1000;
a = 10;
console.log(a);
*/

// USE CASE 8:
/*
let a;
const b;
b = 1000
a = 10;
console.log(a);
*/

// USE CASE 8:
/*
console.log(a);
let a;
const b = 1000;
a = 10;
console.log(a);
*/

// USE CASE 9:
/*
console.log(y);
let a;
const b = 1000;
a = 10;
console.log(a);
*/
