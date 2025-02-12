//Q1
function sayHello(){
    console.log("Hello World")
}
sayHello()

//Q2
function displayWarning(){
console.log("Warning! System Overload!")
}
displayWarning()

//Q3
function printStatus(){
console.log("System Status: Active")
}
printStatus()

//Q4
function initialize(){
console.log("Initialization Complete.")
shutdown()
}
function shutdown(){
console.log("System Shutting Down…")
}
initialize()

//Q5
function startProcess(){
console.log("Process Started.")
endProcess()
}
function endProcess(){
console.log("Process Ended.")
}
startProcess()

//Q6
function greetUser(name){
console.log("Hello, "+name+"!")
}
greetUser("Poorna")
greetUser("Durga")
greetUser("Pilli")

//Q7
function calculateSum(a,b){
console.log(a + b)
}
calculateSum(a=3,b=5)
calculateSum(10,20)
calculateSum(b=22,a=38)

//Q8
function countDown(){
for (var i=5;i>=1;i--){
console.log(i)
}
}
countDown()

//Q9
function checkEvenOdd(n){
if (n%2 == 0){
console.log("Even")
return
}
else{
console.log("Odd")
}
}
checkEvenOdd(54)
checkEvenOdd(9)
checkEvenOdd(67)

//Q10
function beginSession(){
console.log("session started")
endSession()
}
function endSession(){
console.log("session ended")
}
beginSession()





