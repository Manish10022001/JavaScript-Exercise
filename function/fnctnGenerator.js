/* Function Generator:
    -can return multiple values. it is used to configure iterator.
    -Generator comprises of : a)value b)done c)next() d)return()
    -Generator return value by using "yield" operator.
    -we need to create object for generator function
*/
function* DemoOne(){
    yield 1;
    yield 2;
    yield 3;
}
let objOne = DemoOne();//create object
console.log("Value : "+objOne.next().value)
console.log("Value : "+objOne.next().value)
console.log("Value : "+objOne.next().value+"\n")

function* DemoTwo(){
    yield function(a,b) {return a+b};
    yield function(a,b) {return a+b};
    yield function(a,b) {return a+b};
}
let objTwo = DemoTwo();
console.log(objTwo.next().value(2,3));
console.log(objTwo.next().value(3,4));
console.log(objTwo.next().value(8,4)+"\n");

function* DemoThree(){
    yield function(a,b) {return a+b};
    yield function(a,b) {return a+b};
    yield function(a,b) {return a+b};
}
let objThree = DemoThree();
console.log(objThree.next().value(2,3));
console.log(objThree.next().value(3,4)+"\n");
objThree.return();
//console.log(objThree.next().value(8,4)+"\n"); //error - not defined, because above we 
                                        //gave return(), which terminate the block or 
                                        //statement after this

function* InfiniteLoop(){
    let x=1;
    while(true){
        let increment=yield x;
        if(increment!=null){
            x+=increment;
        } else{
            x++
        }
    }
}
let objFour=InfiniteLoop();
console.log(objFour.next());
console.log(objFour.next());
console.log(objFour.next(5));
console.log(objFour.next());