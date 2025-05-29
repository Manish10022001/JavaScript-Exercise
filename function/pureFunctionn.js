//pure function: uses its own memeory and make it global, without declaring global variable
//can access and use the value from any other function.
function Addition(a,b){
    return a+b;
}
function Result(){
    console.log("Addition = "+Addition(3,4));
}
Result();