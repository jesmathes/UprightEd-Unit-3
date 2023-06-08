// let list is a variable which hilds info or data, which here is an array, or a list of other diff kinds of data.
//     here, this is an array with strings.

//     methods are a way for us to find diff points in out arrays.a log is a method.
// in js we have array methods available to us:
// like look at 1st one, last one, insert things, cut things out, all kinds of things. intro this class and how to find ...go over bigger more common one. how we go and find more.
// ?   each method gives us a way to solve problems

let list = ["bob", "egg", "yes", "not"];
//             0      1     2      3
// console.log(list[1]);

// value associated (0, 1, 2, 3, ...) (indeces start at zero)

// we can change a value that's w/in a position (grocery list ex) and update it
// so target the index position of variable we want to change. here, change "bob"
// target our variable
// variable is    list
// square bracket notation
// index position is zero
// then we update it, by giving it a new value

console.log(list[2]);
list[0] = "sam";
console.log(list);

// diff ex  like with a menu, diff hamburgers, but u just wanna show the first 10 of them in the array..... if user want to see next page, then we rerender it.

// arrays have great way of storing diff data types, like:
// typeof
// make new array, w. couple diff values associated here
//  set a new array w.in that

// let avengers = ["nick", 2, false, "steve", "bruce", ["tony", 8, true], sweethearts];

// console.log(avengers);

// use newish keyword typeof to see what kind of data

// console.log(typeof avengers);

// want to know what kind of objects to understand how i can manipulate the array.
// also can use new keyword   instanceof

console.log(avengers instanceof Array);

let string = "string";
console.log(string instanceof String);

// everything is an object with the exception of arrays and objects.... they have types of classes assigned to  them,, can create strings; numbers

//  talk about all this with classes later
// for now, instanceof to look at array types
// ---------------

/*
Using the console.log();
    - target "Bruce"
    - target "true"
    - using string interpolation, return "Hello, Nick" and "Hello, Tony".
*/

// array of objects on facebook on personal profile
// now facebook has an arrays of diff individuals, and each of them has an array of whatever.... so it's data within data..... so how do youe programmatically parse it.

// now make new array and plug it in to one of the ones we have already: (nesting)

let sweethearts = ["Jakimo", "Omar", "Marco", "Elias"];
let avengers = [
  "nick",
  2,
  false,
  "steve",
  "bruce",
  ["tony", 8, true],
  sweethearts,
];

console.log(avengers);

let uncle = "bruce";
console.log(uncle);
console.log(avengers[5][2]);
let lalala = avengers[5];
console.log(lalala[2]);
console.log(`"Hello, ${avengers[0]}"`);
console.log(`"Hello, ${avengers[5][0]}"`);

// but we may not know what the user has put in the list (what kind of data) ; could be arrays of variables waiting for values to be assigned

// methods: help us parse thru and manplate our arrays.... lists in mdm docs
//   .push()
// looks like a function, which runs a small set of logic for us
// lets us chop up our programs into smaller bits of programs

// thats what methods are doing for us

// specf desgned for a type of object
// here, it's an array

// so,  array.push()  will run the logic based off  the fact that it's an array
//  the same as the .log running a set of logic off of the object console

//  .push()

// let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese cake", "Hot dog"];

// cycle thru these:

for (item of food) {
  console.log(item);
}

// using the for/of loop to see all the  items that's within it

// what if want to add food to it? use the .push()
// like this: 1st, target the array
food
  // then, use as we use  console.log, with whatever we want to put in there
  .push();
// then console.log it
// so...

// let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese cake", "Hot dog"];
food.push("pizza");
console.log(`push: ${food}`);

//  adds it to the end

// ---------

// .splice() this lets us remove and then insert specific locations

// 1 what position?
// 2 how many cut?
// 3 what replace with?
// .splice(position, number to remove, new info)

let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese cake", "Hot dog"];
food.splice(1, 1, "turnip");
console.log(`splice1: ${food}`);
food.splice(1, 0, "oranges");
console.log(`splice2: ${food}`);

//  .pop()    a way to remove from the end of the array  (the last item...)

food.pop();
console.log(`pop: ${food}`);

// .shift()    removes the first item/element/value  in an array

food.shift();
console.log(`shift1: ${food}`);

//    .unshift()   add a new value to an array (to the front)
food.unshift("water", "spoon");
console.log(`unshift1: ${food}`);

// why does this matter?  depends on the problem, but APIs.... can grab info, like a date, and would need to put it into a particular position in an array, and add the date to it.
// different problems need diff kinds of methods

// .length   no parenthesis ..., returns a numeric value of hhow many items are in the array

let count = [2, 4, 5, 28];
console.log(count.length);
console.log(count[count.length - 1]);
let food1 = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese cake", "Hot dog"];
console.log(food1.length);
console.log(count[food1.length - 1]);

// iteration methods:
//   .filter()  &  .includes()
// doesn't destroy(changer) the original array
// stores the filtered array in a new variable
// takes a callback function that returns either a true or a false
// loops thru an array
// must have a return
