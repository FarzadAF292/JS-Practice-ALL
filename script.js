/* 🧪 Task 1.1

Create a variable called age and assign any number.

Then:

If age is 18 or more, print "Adult"

Otherwise, print "Minor"


let age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
*/

// Task 1.2

/*
const score = Number(prompt("Enter a number from 0-100:"));
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70 && score < 90) {
  console.log("Good");
} else if (score >= 50 && score < 70) {
  console.log("Pass");
} else {
  console.log("Fail");
}
*/

/*
🧪 Task 1.3

Using the same score variable:

If score is not a number OR

Score is less than 0 OR

Score is greater than 100


const score = Number(prompt("Enter a number from 0-100:"));
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid score");
}
*/

// 🧪 Task 1.4
/*
const temp = Number(prompt("Enter a number for temperature:"));
let result = temp`` >= 30 ? "Hot" : "Cold";
console.log(result);
*/

/////////////////////////////// Phase 2 -- Loops
// 🧪 Task 2.1
//for (let i = 1; i <= 10; i++) console.log(i);

// 🧪 Task 2.2
/*
Using a for loop:

Print numbers from 1 to 20

Print ONLY even numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

// 🧪 Task 2.3
/*
let i = 5;
while (i >= 1) {
  console.log(i);
  i--;
}
*/

// 🧪 Task 2.4
/*
for (let i = 1; i <= 10; i++) {
  if (i === 6) break;
  console.log(i);
}
*/

// Task 2.5
/*
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}
*/

/////////////////// Phase 3 -- Arrays
// 🧪 Task 3.1
/*
const numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
*/

// 🧪 Task 3.2
/*
const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
*/

// 🧪 Task 3.3
/*
const fruits = ["apple", "banana"];
fruits.push("orange");
fruits.pop();

console.log(fruits);
*/

// 🧪 Task 3.4
/*
const colors = ["red", "green"];
colors.unshift("blue");
colors.shift();
console.log(colors);
*/

// 🧪 Task 3.5
/*
const nums = [1, 2, 3, 4, 5];
const newNums = nums.map((nums) => nums * 2);
console.log(newNums);
*/

// 🧪 Task 3.6
/*
const nums = [1, 2, 3, 4, 5, 6];
const evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums);
*/

// 🧪 Task 3.7
/*
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
*/

/////////////////// Phase 4 -- Chainning
// 🧪 Task 4.1
/*
Keep only even numbers

Double them
const nums = [1, 2, 3, 4, 5, 6];
const result = nums.filter((num) => num % 2 === 0).map((num) => num * 2);
console.log(result);
*/

// 🧪 Task 4.2
/*
const nums = [1, 2, 3, 4, 5, 6];
const total = nums
  .filter((num) => num % 2 === 1)
  .map((num) => num * num)
  .reduce((acc, curr) => acc + curr, 0);
console.log(total);
*/

///////////////////////// Phase 5 -- Functions
// 🧪 Task 5.1
/*
const add = function (a, b) {
  return a + b;
};
const result = add(5, 3);
console.log(result);
*/

// 🧪 Task 5.2
/*
const isAdult = function (age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};
const result = isAdult(20);
console.log(result);
*/

// 🧪 Task 5.3
/*
const isAdult = (age) => {
  return age >= 18;
};
const result = isAdult(16);
console.log(result);
*/

// 🧪 Task 5.4
/*
const isAdult = (age) => age >= 18;
const result = isAdult(8);
console.log(result);
*/

///////////////////// PHASE 6 — FUNCTIONS + ARRAYS
// 🧪 Task 6.1
/*
const doubleAll = (arr) => {
  return arr.map((num) => num * 2);
};
const result = doubleAll([1, 2, 3]);
console.log(result);
*/

// 🧪 Task 6.2
/*
const getEvens = (arr) => arr.filter((num) => num % 2 === 0);
const result = getEvens([1, 2, 3, 4, 5, 6]);
console.log(result);
*/

// 🧪 Task 6.3
/*
const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
*/
