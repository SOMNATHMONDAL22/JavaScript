const coding = ["js","ruby","cpp","java","python"]

// coding.forEach( function(val){   //Callback function
//     console.log(val)
// })

// coding.forEach((item)=>{ //Callback function
//     console.log(item)
// })

function printme(item){
    // console.log(item);
}

coding.forEach(printme)

//

// coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);
// })

//

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})

