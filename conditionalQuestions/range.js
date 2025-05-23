//WAP to find if the given number is within the specified range;
function FindRange(num, min, max){
    if(num>=min && num<=max){
        console.log("Your numbers "+num+" is in range of "+min+" - "+max);
    } else{
        console.log("Your numbers "+num+" is out of  range "+min+" - "+max);
    }
}
FindRange(10,20,30);
FindRange(30,10,40);