#### 1) What is the difference between var, let, and const?
**Ans:** 
var --> Function scoped (available inside the function), can be re-declared in the same scope, can be re-assigned
let --> Block scoped (available within the block where it is called), cannot be redeclared, can be re-assigned
const --> Block scoped (available within the block where it is called), cannot be redeclared, cannot be re-assigned



#### 2) What is the difference between map(), forEach(), and filter()? 
**Ans**: 
forEach() --> Loops through an array and performs an operation on each element of the array
map() --> Transforms every element of an array
filter() --> Filters out elements based on a given condition


#### 3) What are arrow functions in ES6?
**Ans**:
Arrow function is a new function calling technique that is mostly used for writing short functions to make it more convenient for the programmer and make the code more efficient.

#### 4) How does destructuring assignment work in ES6?
**Ans:**
Destructuring assignment is used to unpack values from arrays or properties from objects into separate variables in an efficient way that takes less number of lines than the traditional way.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
**Ans:**
Template Literals are a new way of working with strings using ``(backticks) instead of ""(quotation). 
1) We don't have to use separate quotations and '+' sign to concatenate. We can interpolate it within the same backtick.
2) We can write multi-line strings within the same backtick.
3) We can put any javascript inside ${}.
3) Can be tagged with a function.