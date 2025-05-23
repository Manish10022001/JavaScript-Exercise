function patternOne(n){
    //logic for printing the pattern

//write a loop to repeat a task for n rows
for(let row=1; row<=n; row+=1){
    //task
    //the task is to concatenate "*" n times
    let str ="*";
    for(let col=1; col<=n; col+=1){
        str += "*";
    }
    console.log(str) 
}
}
patternOne(5)