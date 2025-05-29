function VerifyValue(value){
    console.log("Your value "+value+ " is : "+typeof value);
}
VerifyValue(4)
VerifyValue("Hi")
VerifyValue(true)
VerifyValue(["tv",8])
VerifyValue({tv:"samasung",Age:34});
VerifyValue(function(){console.log("Hello")})