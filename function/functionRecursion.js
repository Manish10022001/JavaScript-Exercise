/* Function Recursion:
    -process of accessing a function within the context of same function
    -Recursion is the process of executing any specified task repeatedly without
    looping and iterations
*/
//write a function without using loops and iterations to print numbers from 1 t0 10.
function printNumber(n){
    console.log(n+"\n");   //n                      
    n++                    //1          1++ = 2   2++ = 3
    if(n>10){              //1<10,next  2<10      3<10, next
                                //step              step
        return ;
    }
    printNumber(n)         //n=1        n=2       n==3 and so on thil n>10
}
printNumber(1);