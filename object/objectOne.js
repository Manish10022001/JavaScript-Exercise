let product = {
    "Name":"Samsung TV",
    "Price": 40000.00,
    "Stock":true,
    "Cities": ["Delhi","Hyderabad"],
    "Rating": {"Rate":4.4,"Count":3400}
}
console.log(product)
console.log("Name: "+product.Name);
console.log("Price: "+product.Price);
console.log("Stock: "+product.Stock);
console.log("Cities: "+product.Cities[0]);
console.log("Rating: "+product.Rating.Rate);