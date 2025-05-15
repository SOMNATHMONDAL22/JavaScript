//Arrays


const myArr = [0,1,2,3,4,5,true,"Somnath"]
const heros = ["tom","oggy","ben"]
const myArr2 = new Array(12,32,24,12)
// console.log(myArr[7])
// console.log(myArr2)

//Array methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr) //Adds value in last position
// myArr.pop()//removes last position value , no need to provide values
myArr.unshift(98) //Adds in first position
myArr.shift(98) //removes in first position
// console.log(myArr)

// console.log(myArr.includes(7))
// console.log(myArr.indexOf(4)) //returns -1 if not available

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

//Slice and splice

console.log("A",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)
const myn2 = myArr.splice(1,3) //Splice includes the last index also modifies the original array
console.log("C",myArr)

console.log(myn2)


