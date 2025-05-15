const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
const myheros = ["ben10","oggy","tom"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros)

//Spread operator

const all_new_heros = [...marvel_heros, ...dc_heros, ...myheros]
// console.log(all_new_heros)

const another_array = [1,2,5,[4,5,6],1,[6,7,[8,5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array.sort())


console.log(Array.isArray("Somnath"))
console.log(Array.from("Somnath"))
console.log(Array.from({name:"Somnath"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))