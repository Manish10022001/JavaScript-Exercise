/*
    *
    **
    ***
    ****
    *****
    ******

*/
function patternTwo(n){
    
for(let row=0; row<=n; row++){
    let str="*"
    for(let col=1; col<=row; col++){
        str +="*"
    }
    console.log(str)
} 
}
patternTwo(4)