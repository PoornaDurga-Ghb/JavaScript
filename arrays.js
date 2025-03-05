// Q1
var arrayOne = [1 , 2 , 3 , 4 , 5]
console.log(arrayOne)
// for (var elements of arrayOne)
// console.log(elements)

//Q2
var arrayTwo = ['what' , 'is' , 'your' , 'favourite' , 'food item']
console.log(arrayTwo[3])

//Q3
var arrayThree = ['pizza' , 'burger' , 'biryani' , 'pasta' , 'maggie']
arrayThree[2] = 'Chicken Biryani'
console.log(arrayThree[2])

//Q4
function arrayFour(){
    var arr = [1, 10, 100, 1000, 10000, 100000]
    return arr.length
}
console.log(arrayFour())

// Q5
var arrayFive = ['one' , 2 , 'three' , 4]
console.log(arrayFive)
arrayFive.push('five')
console.log(arrayFive)

//Q6
var arraySix = ['hey' , 'hello' , 'hii' , 'namasthey']
arraySix.pop()
console.log(arraySix)

//Q7
var arraySeven = [1 , 2 , 3 , 4 , 5]
console.log(arrayOne)
for (var elements of arrayOne)
console.log(elements)

//Q8
function arrayEight(array,item){
    return array.includes(item)
}
console.log(arrayEight([9,8,7,6,5,4] , 5))
console.log(arrayEight([9,8,7,6,5,4] , 3))

//Q9
var arrayNine = ['copy1' , 'copy2' , 'copy3'];
var temp = arrayNine.slice();
// var temp2 = [...arrayNine];
// var array.from(arrayNine);
console.log(temp);

//Q10
var arrayTen = [21, 31, 41, 51 ,61, 71]
var str = arrayTen.join();
console.log(str)