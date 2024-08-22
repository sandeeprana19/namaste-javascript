// EP-09 | BLOCK SCOPE & Shadowing in JS 🔥
// USE CASE 1:
/*
{
}
*/

// USE CASE 2:
/*
{
  // Compound Statement
  var a = 10;
  console.log(a);
}
*/

// USE CASE 3:
/*
{
  // Compound Statement
  var a = 10;
  console.log(a);
}

if(true)
*/

// USE CASE 4:
/*
{
  // Compound Statement
  var a = 10;
  console.log(a);
}

if (true) true;
*/

// USE CASE 5:
/*
if (true) {
  // Compound Statement
  var a = 10;
  console.log(a);
}
*/

// USE CASE 6:
/*
{
  var a = 10;
  let b = 20;
  const c = 30;
}
*/

// USE CASE 7:
/*
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
*/

// USE CASE 8:
/*
var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
*/

// USE CASE 9:
/*
var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
*/

// USE CASE 10:
/*
var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
*/

// USE CASE 11:
/*
let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(b);
*/

// USE CASE 12:
/*
const c = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(c);
*/

// USE CASE 13:
/*
const c = 100;
function x() {
  const c = 30;
  console.log(c);
}
x();
console.log(c);
*/

// USE CASE 14:
/*
var a = 20;
{
  var a = 20;
}
*/

// USE CASE 15:
/*
let a = 20;
{
  var a = 20;
}
*/

// USE CASE 16:
/*
var a = 20;
{
  let a = 20;
}
*/

// USE CASE 17:
/*
let a = 20;
function x() {
  var a = 20;
}
x();
*/

// USE CASE 18:
/*
const a = 20;
{
  const a = 20;
}
*/

// USE CASE 18:
/*
const a = 20;
{
  const a = 100;
  {
    const a = 200;
    console.log(a);
  }
}
*/

// USE CASE 19:
/*
const a = 20;
{
  const a = 100;
  {
    const a = 200;
  }
  console.log(a);
}
*/

// USE CASE 20:
/*
const a = 20;
{
  const a = 100;
  {
    console.log(a);
  }
}
*/

// USE CASE 20:
/*
const a = 20;
{
  const a = 100;
  {
    const a = 200;
  }
}
console.log(a);
*/
