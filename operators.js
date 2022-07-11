let x = 3,
  y = 20;
console.log("Exponentiation");
console.log(x ** x);
console.log("Reminder");
console.log(y % x);
console.log("++ operator on 3:" + ++x);
//chain Assignments

let a, b, c;

a = b = c = 2 + 2;

alert(a); // 4
alert(b); // 4
alert(c); // 4
//multiple ternary operators
let age = prompt("age?", 18);

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

alert(message);
