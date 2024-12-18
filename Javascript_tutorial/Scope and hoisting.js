// Scope and hoisting functions

function parent(){
    const username = "Rahul";

    function child(){
        const name = "Verma";
        console.log(username);
    }

    child();
}

parent();



if (true) {
    const username = "Rahul";
    if (username === "Rahul") {
        const website = "youtube";
        console.log(username + website);
    }
    // console.log(website); // Error: ReferenceError: website is not defined
}
// console.log(username); // Error: ReferenceError: username is not defined



console.log(addone(5));
function addone(num){
    return num + 1;
}



console.log(addtwo(5));
const addtwo = function(num){
    return num + 2
}

