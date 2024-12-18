// singleton

// object literals


const mySym = Symbol("key1")

const myobj = {
    name: "Rahul",
    [mySym]: "myKey1",
    age: 22,
    "full name": "rahul verma",
    channel: "Code with Rahul",
    gend: "male",
    isMarried: false,
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}

// console.log(myobj.gend);
// console.log(myobj["channel"]);
// console.log(myobj["full name"]);
// console.log(myobj[mySym]);

myobj.lastLoginDays = "wednesday";
// Object.freeze(myobj);

myobj.lastLoginDays = "sunday";
// console.log(myobj); 
myobj.greeting = function(){
    console.log("hello world");
}
console.log(myobj.greeting());