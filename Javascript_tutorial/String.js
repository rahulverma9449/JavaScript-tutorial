
const gamename = new String('rahulverma')

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toLowerCase());
console.log(gamename.toUpperCase());

const string = gamename.substring(-8,4)
console.log(string);

const string1 = gamename.slice(-8, 4)
console.log(string1); 