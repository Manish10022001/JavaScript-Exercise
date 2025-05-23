 /* 
     * 
    **    n=6
   ***
  ****
 *****
******

*/
function patternThree(n){
    // we will write a loop which will repeat some task for every row
    for(let row=1; row<=n; row++){
    //inside this loop of row, we will do the task for each row
    //Task - <some spaces> <some stars>
    // n=7, row = 3," "*" " -> this string will be printed for this
    // so lets build the spaces first

    let str="";
    let space= n-row;
    //loop using which we will concatenate (n-row) spaces
    for(let j=1; j<=space; j++){
        str +=" ";
    };
    //after the above loop ends, we will be having (n-row) spaces in str
    // ex: n=7, row=3, str= "    "
    //loop to concatenaate stars    
    let star=row;
    for(let col=1; col<=star; col++){
        str +="*";
    }
    //after the end of the above loop we have both spaces and
    //then stars in the string
    console.log(str);//print the string
}
}
patternThree(5);