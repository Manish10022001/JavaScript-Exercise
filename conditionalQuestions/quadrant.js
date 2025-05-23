//Write a program to find the x,y values are in origins or in which quadrant

function origin(x,y){
    if(x>0 && y>0){
        console.log("First Quadrant");
    } else if(x<0 && y>0){
        console.log("Second Quadrant");
    } else if(x<0 && y<0){
        console.log("Third Quadrant");
    } else if(x>0 && y<0){
        console.log("Fourth Quadrant");
    } else if(x===0 && y===0){
        console.log("Origin");
    }
}
origin(2,2);
origin(-2,-2);
origin(-2,2);
origin(2,-2);
origin(0,0);