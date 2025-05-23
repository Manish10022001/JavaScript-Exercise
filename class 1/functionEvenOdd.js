function isEvenOrOdd(num){
    if(num%2==0){
        return "Even"
    } else{
        return "Odd"
    }
}
// isEvenOrOdd(4);
// console.log(isEvenOrOdd(4));
let x=20;
let y=23;
let z=18;
console.log("X is ", isEvenOrOdd(x));
console.log("Y is ",isEvenOrOdd(y));
console.log("Z is ",isEvenOrOdd(z));

for(i=1;i<=50; i++){
    console.log(i ,"is ",isEvenOrOdd(i));
}