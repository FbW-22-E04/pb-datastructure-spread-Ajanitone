// # Spread the Word

// #### 1. Combining Arrays
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// * Once again create two arrays. Save all elements of both arrays to another variable.

const asianCountries = ["India", "China", "Japan"];
const euroCountries = ["Germany", "France", "Austria"];

const mergeArray = [...asianCountries, ...euroCountries];

console.log("Q1:", mergeArray);

console.log("---------------------------------------------------------------");

// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable.

const array1 = ["Luna", "Kenneth", "John"];
const array2 = array1;

console.log("Q2:Copy array1 to array2:", array2);

console.log("---------------------------------------------------------------");

// #### 3. Find the Largest...
// Create a function to find the largest number in an array.

const numArray = [2, 5, 7, 9];

function maxNum(array) {
  return Math.max(...numArray);
}
console.log("Q3:The largest number in the array is", maxNum());

console.log("---------------------------------------------------------------");

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.

function minNum(array) {
  return Math.min(...numArray);
}
console.log("Q4:The smallest number in the array is", minNum());

console.log("---------------------------------------------------------------");

// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```
// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
// * 5.3 Then change the values of the properties in the employee object.

const person = { name: "John" };
const job = { role: "Teacher" };

const person1 = Object.assign({}, person);

console.log("Q5.1:object {person} cloned to object {person1}:", person1);

console.log("---------------------------------------------------------------");

const employee = { ...person, ...job };

console.log("Q5.2:object {person} merged with object {job}:", employee);

console.log("---------------------------------------------------------------");

employee.name = "Jake";
employee.role = "Farmer";

console.log("Q5.3:Value changed in variable employee:", employee);

console.log("---------------------------------------------------------------");

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

function isWhole(num1, num2, num3, num4) {
  let total = num1 + num2 + num3 + num4;
  let avg = total / 4;

  return total % 4 === 0;
}

console.log("Q6:", isWhole(1, 2, 3, 6));
console.log("Q6:", isWhole(1, 3, 5, 6));
