// EP-10 | Closures in JS 🔥
// CASE 1:
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

// CASE 2:
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
