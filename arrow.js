// Definition and Comparison:
// What is an arrow function in JavaScript, and how does its syntax differ from a traditional function expression?
// Ans) Arrow function is a function which doesn’t have a function keyword, function name and is denoted by an arrow ‘=>’. This syntax has no function keyword and function name and an arrow representing it as an arrow function. Unlike traditional function expressions they are used to write function in less lines by following all rules and they are used mostly in callbacks. The syntax for Arrow function is : 
// var name =  () => {
// //statements
// Return //optional
// }
// 1.	Basic Conversion:
// Convert the following function into an arrow function:
 
var add = (a , b) => a+b;
          console.log(add(3,5));
// 2.	Implicit Return:
// Rewrite the following function as an arrow function that uses an implicit return:
 
var square = n => n*n;
         console.log(square(5));
// 3.	Single Parameter Syntax:
// How does the syntax change for an arrow function when it takes exactly one parameter?
// Explain why parentheses might be omitted in this case.
// Ans) When we pass exactly one parameter to an arrow function then the parenthesis is optional according to its rules. The parenthesis around a single parameter can be omitted as it makes code simpler by removing unnecessary characters without changing its meaning.
// 4.	Concise Body vs. Block Body:
// Write two versions of an arrow function that calculates the cube of a number. One version should use a concise body with an implicit return, and the other should use a block body with an explicit return. Compare the two syntaxes in your code.
// Ans) The first version of arrow function is using implicit return:
var calculate = c => c**3
console.log(calculate(3))

// The second version using explicit return:
var calculate = (c) => {return c**3}
console.log(calculate(3))

// 5.	Multiple Parameters and Parentheses:
// Create an arrow function that takes two parameters (a and b) and returns the result of subtracting b from a. Emphasize the syntax with parentheses around the parameters.
var addSub = (a , b) => {
return b - a;
}
console.log((addSub(2 , 10)))
// 6.	No Parameters Arrow Function:
// Write an arrow function that takes no parameters and returns a fixed message, such as
// "Hello, World!". Demonstrate the proper syntax for an arrow function with no parameters.
var noParam = () => "Hello, World!"
console.log(noParam())
