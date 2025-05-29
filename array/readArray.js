/*Methods for reading values;
    1.length
    2.toString()
    3.join()
    4.slice()
    5.find()
    6.filter()
    7.map()
    8.for..in
    9.for..of
    
*/

let categories = ["Electronics","Footwear","Fashion"];
console.log(categories.length);
console.log(categories.toString()); //toString(): returns all separated with ,(comma)
console.log(categories.join("---->"));//join(): return separated with custom delimeter
console.log(categories.slice(1,2)); //slice(): returns array from specified index



let sales =[23422,56321,90109,10000];
let result = sales.find(function(value){  // find(): returns first occurance that 
    return value>24000;                   //match condition
})
console.log(result);

let resultFilter = sales.filter(function(value){
    return value>24000;  //filter: returns all occurences that match condition
})
console.log(resultFilter);

let resultMap = sales.map(function(value){ //map: returns all using an iterator
    return value;
})
console.log(resultMap)
console.log();

console.log("for..in : iterator to read property.");
for(let property in sales){
    console.log(property)
}
console.log();

console.log("for..of: iterator to read elements from collection")
for (let item of sales){
    console.log(item)
}

console.log();
console.log("For...in: to read both property and its elements")
for( let property in sales){
    console.log(`[${property}] - ${sales[property]}<br>`)
}