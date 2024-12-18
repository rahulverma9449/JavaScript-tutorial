const  hero = ["thor", "spiderman", "superman", "ironman" ]
const dc = ["batsman", "flash", "iceman"]

// hero.push(dc)
// console.log(hero);

// const allhero = hero.concat(dc);
// console.log(allhero);

// +++++++++++ spread array ++++++++++
// const allhero = [...hero, ...dc];
// console.log(allhero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const reusable_array = another_array.flat(Infinity);
console.log(reusable_array);


console.log(Array.isArray("rahul"))
console.log(Array.from("rahul"))
console.log(Array.from({name: "rahul"})) // interesting part for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score3,score2));