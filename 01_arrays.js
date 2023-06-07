/*   */
/*   */
// ?JUNE6
/* 
! Arrays
- Denoted w square brackets [ ]
- Indicess start at zero

*/
let list = ["milk", "bread", "chicken", "coffee"];
//    0        1        2          3

// console.log(list[2]);
// .log  is a method
// arrays are considered objects by js
// building out a simple array here
//  can create all sorts of conditions, ex selecting all the evens or odds.

// we can change a value inside a position
// ex: a grocery list app
console.log(list[2]);
list[0] = "chocolate milk";
console.log(list);

// target exact position... type a new item, and replace it w what the user has put in.

// Arrays can use dif data types
// ex: typeof
// let's make a new array
// ?  ~28:00  then ~ 42:00 after adding heroes

let heroes = ["a", "d", "o"];

let avengers = ["Nick", 2, false, "Steve", "Bruce", ["Tony", 8, true], heroes];

// console.log(typeof avengers);
// // what TYPE of object is this?
// console.log(avengers instanceof Array);

/*
Using the console.log();
    - target "Bruce"
    - target "true"
    - using string interpolation, return "Hello, Nick" and "Hello, Tony".
*/

// so with humonguous arrays, how do you parse out all the info.... some object that's part of an array, which is part of another one, etc etc...

// console.log(avengers[4]);
console.log(avengers[5][2]);
// let avegersArray = avengers[5];
// console.log(avegersArray[2]);
// ? LOST THE THREAD HERE AT ~ 52:00
console.log(`HELLO, ${avengers[0]}`);
console.log(`hello, ${avengers[5][0]}`);

// !  Methods
// ?~58:00

// .push()
let food = ["pie", "gum", "banana", "pizza", "salsa"];

for (item of food) {
  console.log(item);
}

food.push("pizza");
console.log(`Push: ${food}`);
// this is only to track the information

//* .splice( ) -  can REMOVE and/or INSERT at specific locations.
// takes in 3 requirements - .splice(position, number to remove, new info)
food.splice(1, 1, "grapes");
console.log(`Splice 1: ${food}`);

food.splice(1, 0, "peanuts");
console.log(`Splice 1: ${food}`);

// * .pop( ) - REMOVE from the end of an array
food.pop();
console.log(`Pop: ${food}`);
// food.pop(3);
// console.log(`Pop2: ${food}`);
// only removes the last item of an array
// dev mozilla websie re global objects/arrays/pop   check this commented out area against eric's

// *  .shift()  -  REMOVES the first item in an array
food.shift();
console.log(`Shift: ${food}`);

//*  .unshift()   -  ADD new value to array (at the beginning of the array
food.unshift("eggs", "oranges");
console.log(`Unshift: ${food}`);

//*  .length  -   Returns a numeric value of HOW MANY items are IN the array.
let count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(count.length);
console.log(count[count.length - 1]);

// !  Iteration Methods
/*   */
/*   */

/* .filter()  &   .includes()
- does not destroy the original array
-stores the filter array in a


  */
//  ? ~1:46

let fruits = ["apple", "pear", "mango", "orange", "pineapple"];

//  how can i use a .filter to remove the mango?
// const filteredFruit = fruits.filter(fruit => {
//     let result = fruit !== 'mango';
//     console.log(result); // is a true/false value
//     return result;
// });

let fruitExample = (fruit) => {
  let result = fruit !== "mango";
  console.log(result); // is a true/false value
  return result;
};
const filteredFruit = fruits.filter(fruitExample);

console.log(filteredFruit);

//
let newArray = [1, 2, 3, 4];

let even = newArray.filter(evenFunction);

function evenFunction(num) {
  let evenNumber = num % 2 == 0;
  return evenNumber;
}

console.log(even);
// ? ~2:05 lost him when he was going up and down the page

let fruits2 = ["apple", "pear", "mango", "orange", "pineapple"];
// remove any fruit that has the word "apple" in it?

// let checkFruit = "pineapple";
// console.log(checkFruit.includes("apple"));  returns boolean

const filterNewFruits = fruits2.filter((fruit) => !fruit.includes("apple"));
console.log(filterNewFruits);

let people = ["Bob", "Jane", "Jack", "Barbara"];
const checkNames = people.filter((n) => n.includes("B"));
console.log(checkNames);

// ? ~2:22

//   .forEach()
/*  */
/*  */
/* 
-It runs three arguments
    - The Value
    - The Index
    - The array object itself
*/

let items = ["a", "b", "c", "d"];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

items.forEach((x) => console.log("For Each ", x));
items.forEach((x, i) => console.log("ForEach: ", x, i));

//*  .find()
/*  */
/*  */

/*  */
/* 
    .find((parameter, index) =>  {code block})
        - index:optional */

let tmnt = ["m", "n", "l", "r", "s", "sh", "b"];

let character = "l";
console.log(
  "Find ",
  tmnt.find((c) => c == character)
);

character = "d";
console.log(
  "Find ",
  tmnt.find((c) => c == character)
);

character = "s";
tmnt.find((c, i) => console.log(c == character, "index: , i"));

let leader = tmnt.find((c, i) => {
  if (c == character) {
    return tmnt[i];
  }
});

console.log("leader: ", leader);

//* .map()
// -cycle thru an array of items and readjust how we would like it to display.

let numArray = [];
let FizzBuzzArray = [];

for (let i = 1; i < 101; i++) numArray.push(i);
// console.log(numArray);

numArray.map((x) => {
  if (x % 15 === 0) FizzBuzzArray.push(x);
});

console.log(FizzBuzzArray);
// ? ~ 3:00
