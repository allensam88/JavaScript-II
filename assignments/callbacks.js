// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

  // // GIVEN THIS PROBLEM:

  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // // SOLUTION:

  // function firstItem(arr, cb) {
  //   return cb(arr[0]);
  // }

  // // NOTES ON THE SOLUTION:

  // // firstItem is a higher order function.
  // // It expects a callback (referred to as `cb`) as its second argument.
  // // To test our solution, we can use the given `items` array and a variety of callbacks.
  // // Note how callbacks can be declared separately, or inlined.

  // // TEST 1 (inlined callback):

  // const test1 = firstItem(items, item => `I love my ${item}!`);
  // console.log(test1); // "I love my Pencil!"

  // // TEST 2 (declaring callback before hand):

  // function logExorbitantPrice(article) {
  //   return `this ${article} is worth a million dollars!`;
  // };

  // const test2 = firstItem(items, logExorbitantPrice);
  // console.log(test2); // "this Pencil is worth a million dollars!"


// //Question 1
// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
//   return cb(arr.length);
// }
// //Callback Function
// const length = getLength(items, item => `The number of items in the array is ${item}!`);
// //Test
// console.log(length);
// //End of Question 1

// //Question 2
// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   return cb(arr[arr.length - 1])
// }
// //Callback Function
// const lastItem = last(items, item => `The last item in the array is ${item}!`);
// //Test
// console.log(lastItem);
// //End of Question 2

// //Question 3
// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
//   return cb(x, y);
// }
// //Callback Function
// const add = (x, y) => x + y;
// //Test
// console.log(sumNums(2, 5, add));
// //End of Question 3

// //Question 4
// function multiplyNums(x, y, cb) {
//   return cb(x, y);
//   // multiplyNums multiplies two numbers and passes the result to the callback.
// }
// //Callback Function
// const multiply = (x, y,) => x * y;
// //Test
// console.log(multiplyNums(2, 5, multiply));
// //End of Question 4

// //Question 5
// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   return cb(item, list);
// }
// //Callback Function
// const check = (item, list) => if(list.includes(item)){`${item} is present`};
// //Test
// console.log(contains('Pencil', items, check));
// //End of Question 5

/***************BREAK****************/

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
