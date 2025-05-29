/*
    Add Elements to array:
    1.push(): add new elements as last elements
    2.unshift(): add new elements as first elements
    3.splice: add new elements at specific position
*/

let categories = ["Electronics","Footwear","Fashion"];
categories.push("All");
//categories.unshift("All")
//categories.splice(2,0,"Mobile","Shoes");
for(let property in categories){
    console.log(`[${property}] - ${categories[property]}`)
}
console.log()

categories.unshift("All")
for(let property in categories){
    console.log(`[${property}] - ${categories[property]}`)
}
console.log();

categories.splice(2,3,"Mobile","Shoes");
for(let property in categories){
    console.log(`[${property}] - ${categories[property]}`)
}