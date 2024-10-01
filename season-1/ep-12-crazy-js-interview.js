// EP-12 | CRAZY JS INTERVIEW 🤯ft. Closures
// USE CASE 1:
/*
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

outer()();
*/

// USE CASE 2:
/*
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

var close = outer();
close();
*/

// USE CASE 3:
/*
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}

var close = outer();
close();
*/

// USE CASE 4:
/*
function outer() {
  function inner() {
    console.log(a);
  }
  let a = 10;
  return inner;
}

var close = outer();
close();
*/

// USE CASE 5:
/*
function outer(b) {
  function inner() {
    console.log(a, b);
  }
  let a = 10;
  return inner;
}

var close = outer("Hello World");
close();
*/

// USE CASE 5:
/*
function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}

var close = outest()("Hello World");
close();
*/

// USE CASE 6:
/*
function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("Hello World");
close();
*/

// USE CASE 6:
/*
function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    // let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("Hello World");
close();
*/

// USE CASE 7:
/*
function counter() {
  var count = 0;
  function incrementCounter() {
    count++;
  }
}

console.log(count);
*/

// USE CASE 8:
/*
function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

var count1 = counter();
count1();
*/

// USE CASE 9:
/*
function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

var count1 = counter();
count1();
count1();
*/

// USE CASE 10:
/*
function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

var count1 = counter();
count1();
count1();

var count2 = counter();
count2();
count2();
count2();
count2();
*/

// USE CASE 11:
/*
function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
*/

// USE CASE 12:
/*
function a(){
  var x=0;
  return function b(){
    console.log(x);
  }
}

a();
*/

// USE CASE 12:
/*
function a() {
  var x = 0;
  return function b() {
    console.log(x);
  };
}

var y = a();
y();
*/

// USE CASE 12:
/*
function a() {
  var x = 0,
    z = 10;
  return function b() {
    console.log(x);
  };
}

var y = a();
y();
*/
