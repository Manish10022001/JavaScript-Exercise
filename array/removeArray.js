/*
    Removes Elements to array:
    1.pop(): removes and returns last element
    2.unshift(): removes and returns the first element
    3.splice: removes and returns the specified element: 
*/

let categories = ["Electronics","Footwear","Fashion","Mobile","Shoes"];
console.log(`${categories.pop()} removed.`);
for(let property in categories){
    console.log(`[${property}] - ${categories[property]}`)
}
console.log()

console.log(`${categories.shift()} removed.`)
for(let property in categories){
    console.log(`[${property}] - ${categories[property]}`)
}
console.log();

console.log(`${categories.splice(1,2)} removed`);
for(let property in categories){
    console.log(`[${property}] - ${categories[property]}`)
}