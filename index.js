function add() {
    return 1 + 81; //=> 81
}
function subtract() {
    return 60 - 40; //=> 20
}
function multiply() {
    return 2 * 3.4; //=> 6.8
}
function divide() {
    return 5.0 / 2.5; //=> 2
}
function add(a, b) {
    return a + b;
  }
function subtract (a, b) {
    return a - b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a / b;
}
function increment(n) {
    return (n += 1);
  }
  
  function decrement(n) {
    return (n -= 1);
  }
  let number = 10;

console.log(increment(number)); // Output: 11
console.log(decrement(number)); // Output: 9

function makeInt(string) {
    return parseInt(string, 10);
  }
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  console.log(makeInt("80.123999")); // Output: 80
console.log(preserveDecimal("80.123999")); // Output: 80.123999

  