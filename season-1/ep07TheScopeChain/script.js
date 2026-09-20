// EP-07 | The Scope Chain, 🔥Scope & Lexical Environment\
// USE CASE 1:
/*
function a() {
  console.log(b);
}

var b = 10;
a();
*/

// USE CASE 2:
/*
function a() {
  c();
  function c() {
    console.log(b);
  }
}
var b = 10;
a();
*/

// USE CASE 3:
/*
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
*/

// USE CASE 4:
/*
function a() {
  var b = 10;
  c();
  function c() {}
}
a();
console.log(b);
*/

// USE CASE 5:
/*
var d = 10;
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
*/
