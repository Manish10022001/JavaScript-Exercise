// Array de-structuring-

let values = [10, "TV", ["Delhi","Hyderabad"], function(){document.write("Hello!")}];
let [id, name, cities, hello]=values;

console.log(hello);

let [firstName, lastName, rollNo, Age, College, isMarried] = [
    "Manish", "Shirsat", 48, 24, "COETA", false ];
console.log("First Name: "+firstName+"\nLast Name: "+lastName+ "\nRoll Number: ",rollNo)