export class Product{
    Name="";
    Price=0;
    Stock= false;

    //for accessor4.html
    Rating ={
        "CustomerRating":{"Rate":4.2,"Count":3400},
        "VendorRating":{"Rate":3.4,"Count":23}
    }
    get CustomerRating(){
        return this.Rating.CustomerRating.Rate;
        return this.Rating.CustomerRating.Count;
    }

    get CustomerCount(){
        return this.Rating.CustomerRating.Count;
    }
}