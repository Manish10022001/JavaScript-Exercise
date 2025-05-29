//Write a program to print factorial of given number
/*
    function Factorial(){
    } Factorial(5);
     5*4*3*2*1;
*/
function Fact(n){                             //fact(5)         
    if(n<1){                                   //= 5 * fact(4)
        return 1;//because factorials         //= 5 * (4 * (3 * fact(2)))
        // can't be 0, 1 is last              //= 5 * (4 * (3 * (2 * fact(1))))
    }                                        // = 5 * (4 * (3 * (2 * (1 * fact(0)))))
                                             // = 5 * (4 * (3 * (2 * (1 * 1))))
    return n*Fact(n-1);//recursion function 
}
console.log(Fact(3));
// fact(5) =
// 5 * (4 * (3 * (2 * (1 * 1)))) =
// 5 * (4 * (3 * (2 * 1))) =
// 5 * (4 * (3 * 2)) =
// 5 * (4 * 6) =
// 5 * 24 =
// 120 

