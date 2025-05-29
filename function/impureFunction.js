//Impure function: can access the memory outside the function or globla variable and 
//modify the memory.

let c=0;
function Addition(a,b){
    c=a+b;
} 
function Result(){
    console.log("Addition = "+c);
}
Addition(3,2);
Result();