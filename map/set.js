let data = new Map();
data.set(1,"Samsung tv");
data.set("HTML","It is a markup language");
console.log(data)

console.log(data.get("HTML"));

console.log("Total No. of keys: "+data.size)
console.log();
//data.delete(1)
//data.clear();
//return all keys

//to checck if key is available
if(data.has(1)){
    console.log(data.get(1))
} else{
    console.log("There is no key by name 1")
}
for(let item of data.keys()){
    console.log(item)
}

//return all values
for(let itemValue of data.values()){
    console.log(itemValue)
}

//return both keys and values
for(let itemEntry of data.entries()){
    console.log(itemEntry);
}
