// EP-11 | setTimeout + Closures Interview Question 🔥
// USE CASE 1:
/*
function x() {
  var a = 1;
  setTimeout(() => {
    console.log(a);
  }, 1000);
}

x();
*/

// USE CASE 2:
/*
function x() {
  var a = 1;
  setTimeout(() => {
    console.log(a);
  }, 3000);
}

x();
*/

// USE CASE 3:
/*
function x() {
  var a = 1;
  setTimeout(() => {
    console.log(a);
  }, 3000);
  console.log("Namaste JavaScript");
}

x();
*/

// USE CASE 4:
/*
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste JavaScript");
}

x();
*/

// USE CASE 5:
/*
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste JavaScript");
}

x();
*/

// USE CASE 6:
/*
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, i * 1000);
    }

    close(i);
  }
  console.log("Namaste JavaScript");
}

x();
*/
