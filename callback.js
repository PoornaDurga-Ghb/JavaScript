// Q1
function processNumbers(num1,num2,funOne){
    return result = funOne(num1,num2)
}
processNumbers(10,21,function(x,y){return x + y})
console.log("Sum : " + result)

// Q2
function greet(callback){
    return callback("Alice")
}
console.log(greet(function(name){return "Hello,"+" "+ name+"!"}))

// Q3
function calculate(n1,n2,operation){
    return res = operation(n1,n2)
}
calculate(10,5,function(a,b){return a - b})
console.log("Difference :"+" "+res)
