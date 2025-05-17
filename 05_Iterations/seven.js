// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num)=> num+10)
// console.log(newNums);

// Different method using scope

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num)=> { return num+20})
// console.log(newNums);

const newValue = myNumbers.
                    map( (num)=> num*10).
                    map((num)=> num+1) // this nums first value will be 11
                    .filter((num)=> num>=40);

 console.log(newValue);

 