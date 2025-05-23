//let [x,y,z]=[10,20,30]; //destructuring
let x=500,y=288,z=100;
if(x<y && x<z){
    console.log(x);
} else if(y<z && y<x){
    console.log(y);
} else{
    console.log(z);
}

//correct as well
// if(x<y && y>z){
//     console.log(x)
// } else if(y<x && x>z){
//     console.log(y)
// } else{
//     console.log(z)
// }
