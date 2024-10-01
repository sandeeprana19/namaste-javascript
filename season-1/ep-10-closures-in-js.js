// EP-10 | Closures in JS 🔥
// USE CASE 1:
/*
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();
*/

// USE CASE 2:
/*
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
const z = x();
console.log(z);
//.....
z();
*/

// USE CASE 3:
/*
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
const z = x();
console.log(z);
//.....
z();
*/

// USE CASE 4:
/*
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
*/
