//write a program to check if a triange is equilateral, scalene or isosceles.
//equilateral: all sides same
//isosceles: any two sides same
//scalene : all sides different
function findTriangleType(side1,side2,side3){
    if(side1==side2 && side2==side3){
        console.log("Equilateral Triangle");
    } else if(side1==side2 || side2==side3 || side1==side3){
        console.log("Isosceles Triangle");
    } else{
        console.log("Scalene Triangle");
    }
}