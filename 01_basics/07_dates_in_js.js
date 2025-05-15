//Dates

// let myDate = new Date(2023,0,23)
// // console.log(myDate.toString());
// // console.log(myDate.toDateString()); //Date in letters
// // console.log(myDate.toISOString());
// // console.log(myDate.toLocaleString()); // Date with time
// // console.log(myDate.toLocaleDateString()); //Only date
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toLocaleString())

// // let mytimeStamp = Date.now()
// // console.log(mytimeStamp);
// // console.log(Date.now());
// // console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:'long',
})