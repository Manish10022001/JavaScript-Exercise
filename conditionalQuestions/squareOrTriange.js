function FindShape(values){ //values is array
    if(values.length == 3){
        console.log("Values are for triangle");
    } else if(values.length ==4){
        console.log("Values are for Square")
    } else{
        console.log("Please provide values only for a square or triangle");
    }
}
FindShape([2,1,4]);
FindShape([39,29,39,4]);
FindShape([2,2]);