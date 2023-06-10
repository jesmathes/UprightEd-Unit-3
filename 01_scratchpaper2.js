/*   
arrays
easy to create a variable that has a number or a string or whatever;
an array is a variable with a list of values inside of it.

arrays use []
  
  const a = []  empty array
  */

// const a = [];
// console.log(a);
/* to add elements, specify  inside the square brackets  */

const a = ["A", "B", "C", "D"];
console.log(Object.keys(a));
console.log(a[1]);
console.log(a[5]);
console.log(a.length);
console.log(a);
const a = ["A", "B", "C", "D"];
a.push("E");
a.push(3);
// a.push(1, 2);
a.push([1, 2]);

// const a = [
//   ["A","B"],
//   [1, 2],
// ]

// console.log(a[0][1]);
// change the values inside an array:
// a[0] = 1
// console.log(a)

// the result here is confusing:
// B
// [ 1, [ 1, 2 ] ]

// a.

// for a bunch of diff things can do

// https://youtu.be/R8rmfD9Y5-c

// ? FIRST METHOD:  FILTER METHOD

// - The filters don't change the original array:
// - to see if we want items in our array or not.

// want all the items on this list that are lESS THAN OR EQUAL TO 100 DOLLARS,
// so we filter out items that are NOT less than 100:

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Phone", price: 5 },
  { name: "Book", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
// So, here's a variable: filteredItems.
// take the variable and set it = items.filter(), which is the filter method on the array
// This filter method just takes a single function, here one parameter of: item, which is just each item inside of the array///

//  Then we need to return a true or false statement on whether or not we want to include that item in the array.

//  return item.price <= 100 is saying we want all the items priced less than 100 to be in our new array
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
// test it by:
console.log(filteredItems);

// so this FILTER ARRAY METHOD  is returning a true OR false FOR EACH item,
// and if it's true, it's in the new array,
// and if it's false, it's not in the new array.

// The filters don't change the original array:
console.log(items);
console.log(filteredItems);

// ? SECOND METHOD:  MAP METHOD

/*  allows to take one array, and convert it into a new  array, so all the items in the array are going to look slightly diff */

// here's the same array:
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Phone", price: 5 },
  { name: "Book", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
// So, here we want to get the name of every item, so we can get an array of the item names by using map.
// looks very similar:  we change filter to map,

// and it takes a single parameter, which is the function with (item),,,, same as filter method,

// and then we RETURN what we want in the new array; here, from (price) to (name):

// SO, FROM:

// const filteredItems = items.filter((item) => {
//     return item.price <= 100;
// TO:

// const itemsNames = items.map((item) => {
//   return item.pricename;
// });

// console.log(itemsNames);

// if we want prices instead of names. we change return item.name;  to return item.price;

const itemsNames = items.map((item) => {
  // return item.name;
  return item.price;
});

console.log(itemsNames);

// REALLY HANDY FOR JUST WHEN YOU WANT TAKE AN OBJECT for ex, AND JUST GET THE NAMES, OR A SINGLE KEY,, OR TAKE ONE ARRAY AND CONVERT IT INTO ANOTHER ARRAY, LOTS OF WAY TO USE IT,,,      USE IT INSTEAD OF A NORMAL FOR LOOP OR some other method

// ? THIRD METHOD:  FIND METHOD

// allows you to find a single object within an array

// TRUE or  FALSE statement, and it'll return the item for the first one where it's true.

// here's the same array:
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Phone", price: 5 },
  { name: "Book", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// so lets find the item with the name of 'book'

const foundItem = items.find((item) => {
  return item.name === "Album";
  //   return item.price;
});

console.log(foundItem);

//  - it returns the very first item in the array that returns (true) for the statement that I pass inside of this (find) function.

// ? FOURTH METHOD:  FOR/EACH METHOD

// unlike the other METHODS, (for...each) doesn't actually return anything, so we no longer need this (return) statement here,
/*  const foundItem =  */ items.find((item) => {
  return item.name === "Album";
  //   return item.price;
});
// ...and we don't need to log anything dow here, so get rid of the clg:

/*  console.log(foundItem); */

// so we can say: (.forEach) instead of (.find)

items.forEach((item) => {
  return item.name === "Album";
});
// and it's going to work very similarly to a (for loop), but it's going to take a (function) here instead:
/* (item) => {
   return item.name === "Album";
 }
  */

// the first parameter in the function is (item),just like before, and we can just print out the (item.name)

// here's the same array:
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Phone", price: 5 },
  { name: "Book", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

items.forEach((item) => {
  console.log(item.name);
});

// so, for every single item, it's gonna do what's inside of this function, and we get all the different names of all the diff items being printed out.
// We can print what ever we was, for ex: price:

items.forEach((item) => {
  console.log(item.price);
});

//  or anything need to do for every single element inside the array.
// THIS MAKES WORKING W/ARRAYS WHEN YOU NEED TO LOOP OVER THEM SO MUCH EASIER SINCE YOU DON'T HAVE TO WRITE OUT THE CLUCKY LONG (FOR LOOP) SYNTAX

// ? FIFTH METHOD:  SOME FUNCTION

// A little diff fromt The other FUNCTIONs since instead of returning a brand new array, actually gonna return TRUE or FALSE so:
// we can check is some of the items in this array have a price less then 100...
// so we can say

// items.forEach((item) => {
//   console.log(item.price);
// });

const hasInexpensiveItems = items.some((item) => {
  console.log(item.price);
});

// here's the same array:
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Phone", price: 5 },
  { name: "Book", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
// /it takes the same syntax as all the other array methods, but it just checks the return value. And when a single item reurns true, it's going to return true for the entire thing.
//  so we can say
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 0;
});
console.log(hasInexpensiveItems);

// and if anything comes back as less or equal to 100, then we can say this array has inexpensive items in it.
// we can then log this, as inexpensive items, and you see it says true.
// so if one thing comes back as (true),. we can say the entire array comes back as (true.
//  but say we want to check if there's any items that are less than or equal to zero, and it comes back false.

// ? SIXTH METHOD:  EVERY FUNCTION

// similar to SOME,
// instead of checking for at least ONE item, it checks to make sure EVERY SINGLE item falls under thAT.
// So if we say <= 100, there are items that are more than 100, so it returns that the entire thing comes back false.

// If we do 1000 instead of 100, it comes back true, because ALL the items in this array are less than 1000.

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Phone", price: 5 },
  { name: "Book", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const hasInexpensiveItems = items.every((item) => {
  return item.price <= 1000;
});
console.log(hasInexpensiveItems);

// ? SEVENTH METHOD:  REDUCE FUNCTION

// DIFF FROM all the others cuz it's doing some OPERATION on the array, and returning a combination of all those diff operations.

// so if we wanted to get the total price of ALL of the diff items in this array, normally you'd do a (for loop, and add the price every single time, and at the end you'd print out the price.
// but you can use the reduce method to do this instead.

// the syntax for the reduce method is a little diff. instead of taking an item, it takes an item AND a property for what we want to reduce everything into.
// In this case this is gonna be  currentTotal.... so the total after each iteration of the array.
// and it also takes a second parameter, which is going to be the starting point.
// in this case, we want to start out total at zero,
// and then we take the price of the item, and return it to whatever the current total is.

// here's the same array:
const glad = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Phone", price: 5 },
  { name: "Book", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
// -------

const total = glad.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

// ------
const total = glad.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

// have to have currentTotal be the first method in our parameter, and have item be the second method in the parameter, and that's because item is the actual method tht we'll be iterating over, then we see the total is 1840, which is the total of all these numbers together.

// more confusing, so here's a break-down:

/* 
1- the REDUCE METHOD runs a function on every single item inside of {instead of?} the array. 
//       (currentTotal, item) =>
//     {
//   return item.price + currentTotal;
//     },
2- the first method of that function ( currentTotal) is going to be whatever the PREVIOUIS iteration of this array returned,
3- the second item is whatever the actual item in the array(is)... here it's (item)
4- the current total is going to start on the very first iteration with whatever we pass in as the second parameter, so in our case zero. 

5- so the first time this (reduced) runs
    1- we get zero (0) and our bike item, so it just does 100 plus 0 , and returns that - which is 100.
    2- the second time it runs, that return value of 100, gets put in as the current total, and out next item, the TV is theitem vale, so it
    3- does 200 plus our current value of 100, which is 300, and then it
    4- puts that back in for our current total which becomes 300,
    5- and it does that until we get all the way to the very last item in the array, the keyboard
    6- it'll add that 25 to whatever the previous totals were and then
    7- that'll output as the total - right there in the total variable
    8- which we print in the console.log(total);
*/
// ? EIGHTH METHOD:  INCLUDES METHOD

// doesn't actually take a function, just a single argument.
// so instead of passing a bunch of objects in our array, we're just going to do an array of numbers
// change the value to includesTwo
// checks if whatever we've put into the INCLUDES method is in the array.
// if it is, it's true.
// convenient when u want to just check if an array has a value when you don't want to do a complex find.

const glad = [1, 2, 3, 4, 5];

const includesTwo = glad.includes(3);
console.log(includesTwo);

/*   */

/*   */
/*   */
/*   */
