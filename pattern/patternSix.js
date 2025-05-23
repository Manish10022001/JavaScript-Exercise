/*
   *
  ***
 *****
******* 
 *****
  ***
   *
*/
//for half of the triangle we already have logic , we need
//lower half of the triangle
function upperTriangle(n){
    for(let row=1; row<=n; row++){
        let str="";
        let space= n-row;
        for(let j=1; j<=space; j++){
            str+=" "
        }
        let star= 2*row-1;
        for(let col=1; col<=star; col++){
            str+="*"
        }
        console.log(str)
    }
}
function lowerTriangle(n){
    // the lower triangle consist of n-1 rows
    for(let row=1; row<=n-1; row++){
        // for any given no. row , we have spaces = row
        let str="";
        let space = row;
        for(let j=1; j<=space; j++){
            str+=" ";
        }
        let stars=2*(n-row)-1;
        for(let k=1; k<=stars; k++){
            str+="*";
        }
        console.log(str)
    }
}
function patternSix(n){
    upperTriangle(n);
    lowerTriangle(n);
}
patternSix(5)