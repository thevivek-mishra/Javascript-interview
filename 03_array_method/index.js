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


// delete() method
// When you delete an array element, the array length is not affected. This hold even if you delete the last element of the array.
// when the delete operator removes an array element, that element is no longer in the array.

const trees = ['redwood', 'bay', 'ook','maple']
delete trees[3]
console.log(3 in trees) // false


// note this creates a sparse array with an empty slot. if you want an array element to exist but have an undefined value, use the undefined values instead of the delete operator. in the following example, trees[3] is assigned the value undefined, but array element still exists

trees[3] = undefined

// if instead, you want to remove an array element by changing the contents of the array, use the splice() method. In the following exmample


// concat() method 
// concat() method joins two or more strings. and does not change the existing strings. and return a new string

let text1= 'hello'
let text2 = 'word!'
let result3 = text1.concat(" ", text2)