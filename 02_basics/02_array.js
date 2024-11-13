const marvel_heros=["thor","Ironman","Spiderman"]
const dc_heros=["superman","flash","batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);

const allHeros=marvel_heros.concat(dc_heros)//returns new array
console.log(marvel_heros);

//spread
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=anotherarray.flat(Infinity)//creates a neat single array

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))//Interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


