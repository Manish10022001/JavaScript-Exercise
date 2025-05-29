//How to copy array
//Shallow copy
let categories=["a","b","c","D"];
let menu = Array.from(categories);
console.log("Categories: ",categories);
console.log("Menu: ",menu);

//deepCopy using Json