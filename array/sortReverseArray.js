/* Sorting and Reverse Array:
    1.sort: Arranges array elements into ascending order
    2.reverse: Arranges array elements into reverse order( botton to top)
*/
let cities = ["Mumbai","Nashik","Nagput","Akola"];
cities.sort();
for (let item of cities){
    console.log(item);
}

console.log();

cities.reverse();
for(let item of cities){
    console.log(item);
}