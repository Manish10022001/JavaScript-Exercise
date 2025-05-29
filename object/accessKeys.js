let product = {
    "Name":"TV",
    "Price":22223,
    "Stock":true,
}
Object.keys(product).map(function(key){
    console.log(`<li>${key}</li>`)
})