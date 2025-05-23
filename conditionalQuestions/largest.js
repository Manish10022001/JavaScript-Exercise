function FindLargest(a,b,c){
    if(a>b && a>c){
        console.log("A is largest number");
    } else if(b>a && b>c){
        console.log("B is largest")
    } else{
        console.log("C is largest");
    }
}
FindLargest(1,2,3);
FindLargest(38,18,30);
FindLargest(81,9019,1);