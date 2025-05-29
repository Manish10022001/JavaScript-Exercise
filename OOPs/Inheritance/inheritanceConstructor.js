class SuperClass{
    constructor(){
        console.log("Super Class Constructor");
    }
}
class DerivedClass extends SuperClass{
    constructor(){
        //in js it is mandatory to call superclass constructor in 
        //derived class constructor
        super();
        console.log("Derived Class Constructor")
    }
}
let obj = new DerivedClass;