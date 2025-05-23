// We all know about triangle. But this time let's do someting interesting
//Given 3 integers a,b,c check if we can form a triangle 
//with th sides of the tirangle having length a,b, and c.

// solution: if we want to create a triangle with a,b,c sides 
//then for each side the sum of other 2 sides should be greater

//eg. a>b+c, b>a+c, c>a+b

let a=10,b=12,c=5;
if(a<b+c && b<a+c && c<a+b){
    console.log("Yes");
} else{
    console.log("No")
}