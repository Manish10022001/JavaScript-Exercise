function FindShape(side1,side2,side3,side4){
    if(side1==side2 && side2==side3 && side3==side4){
        console.log("Values are for Square");
    } else{
        console.log("Values are for Rectangle");
    }
}
FindShape(2,2,2,2);
FindShape(23,2,2,1);