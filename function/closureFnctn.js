function Outer(){
    let x=10;
    function Inner(){
        let y = 20;
        console.log("X : "+x+"\n"+"Y : "+y+"\n");
    }
    Inner()
}
Outer();

/*  FAQ : Is the value of inner function accessible to outer?
    Ans: No. You can implement by using function return.
 */
console.log("FAQ :ANS 1")
function outerOne(){
    let x=10;
    function innerOne(){
        let y =20;
        return "x: "+x+"\n"+"y: "+y+"\n";
    }
    let resultOne=innerOne();
    console.log(resultOne)
}
outerOne()

console.log("FAQ :ANS 2")
function outerTwo(outerValue){
    return function innerTwo(innerValue){
        return "Outer : "+outerValue+"\n"+"Inner : "+innerValue+"\n";
    }
}
let resultTwo = outerTwo("Outer Two");
console.log(resultTwo("Inner Value"));

console.log("FAQ :ANS 3")
function outerThree(outerValue){
    return function innerThree(innerValue){
        return "Outer : "+outerValue+"\n"+"Inner : "+innerValue;
    }
}
console.log(outerThree("Outer Value")("Inner Value"));