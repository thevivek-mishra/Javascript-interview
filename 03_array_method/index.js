// Array: An array is a special variable, which can hold more than one value

// using array literal
const fruits = ["Apple", "Banana", "Mango"]
//using new keyword

const fruits2 = new Array("Apple", "Banana", "Mango")

// array to string 

fruits.toString();

// difference between Arrays and Objects

// In js, arrays use numbered indexes
// where as object use named indexes

// Array are a special kind of objects, with numbered indexes


// BASIC ARRAY METHOD 

// array length ()  ---DONE
// array toString() ---
// array at()
// array join()
// array pop ()
// array push ()
// array shift() 
// array unshift()
// array delete()
// array concat ()
// array copyWith()
// array flat ()
// array splice ()
// array toSplice()
// array slice ()

let arr1 = [1,2, 3,4, 5, 5, 6, 7,8]

// length method : its give the length of array
let len =arr1.length
// console.log(len)

//toString() method : converts an array to a string of (comma seprated values.)

let arrToString = arr.toString()

// console.log(arrToString, arr);

// at () method: es2022 introduced the array method at() 
// The at() method returns an indexed element from an array.

let secondElement = arr.at(1)
// console.log(secondElement);

// join() method : The join method joins all array elements into a string. 
// it behaves just like toString(), but in addition you can specify the separator:


const names = ['mohan','sohan','rohan','mahesh','suresh']
let joinNames = names.join(' ')
// console.log(joinNames)

//push and pop method

//pop() method removes the last element form an array
// and returns the value that was popped out

let poppedOutElement = names.pop()
// console.log(`popped out element: ${poppedOutElement} original array: ${names}`)

//push method adds a new element to an array (at the end):
// and returns the new array length 


console.log(names)
let lenOfNewArray = names.push("magaru")
console.log(lenOfNewArray)
console.log(names)

// shift() METHOD
// shift method removes the first element of the array and return the shifted element and also its change the original array
let arr2 = ['banana','grapes','mango']

let result =arr2.shift()

console.log(arr2, result)

// unshift() method
// unshift() method method add a new element at the beginning of the array and overwrite the original array

const fruitsarr = ["Banana", "Orange", "Apple", "Mango"];
fruitsarr.unshift("Lemon","Pineapple");