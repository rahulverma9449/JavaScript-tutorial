(function chai(){
    console.log("DB connected");
}) ();  


( function  () {
    console.warn("DB disconnected-2");
}) ();


( () => {
    console.warn("DB disconnected-3");
}) ();

((name) => {
    console.warn(`DB disconnected- ${name}`);
}) (" mongodb is connected")