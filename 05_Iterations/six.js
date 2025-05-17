// const coding = ["js","ruby","cpp","java","python"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values) 

// const myNums = [1,2,3,4,5,6,7,8,9,10]   //Filter basics

// const res = myNums.filter((num)=>{
//     return num>3;  // if using scope, then use return keyword.
// })
//     console.log(res);


// const newNums = myNums.filter((num)=> { //Filter operation.
//     return num>4}   // use return if you are using scopes in filter 
// )

const myNums = [1,2,3,4,5,6,7,8,9,10] ;  //Same with array

const newNums = []

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums);

const books = [
    {title:'book one', genre:'fiction', publish:1981, edition:2004},
    {title:'book two', genre:'fiction', publish:2002, edition:2008},
    {title:'book three', genre:'history', publish:2003, edition:2004},
    {title:'book four', genre:'science', publish:1935, edition:2003},
    {title:'book five', genre:'geography', publish:2001, edition:2022},
    {title:'book six', genre:'history', publish:1954, edition:2013},
    {title:'book seven', genre:'non-fiction', publish:1976, edition:2015},
    {title:'book eight', genre:'history', publish:1989, edition:2001},
] 

let result = books.filter((bk)=> bk.genre === 'history')
 result = books.filter((bk) =>{
    return bk.publish >=2000 && bk.genre === 'history'})
console.log(result)
// console.log(result)