/*
     1      in this we first solve half triangle and then second half
    121               1                                      
   12321             12                                    1
  1234321           123                                    21
 123454321         1234                                    321 

*/
function patternEight(n){
    for(let row=1; row<=n; row++){
        //space
        let str="";
        let space= n-row;
        for(let i=1; i<=space; i++){
            str+= " ";
        }

        //first half
        let counterOne=1;
        for(let j=1; j<=row; j++){
            str +=counterOne;
            counterOne++;
        }

        //2nd half
        let counterTwo=row-1;
        for (let k=1; k<=row-1; k++){
            str +=counterTwo;
            counterTwo--;
        }
        console.log(str)
    }
}
patternEight(4)