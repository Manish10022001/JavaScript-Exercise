function success(){
    console.log("Login Success");
}
function failure(){
    console.log("Invalid Password");
}
function verifyPassword(password,success,failure){
    if(password=="admin"){
        success();
    } else{
        failure();
    }
}
// verifyPassword("admin",function(){
//     console.log("Login success");
// },function(){
//     console.log("Invalid Password");
// })
verifyPassword("admin",success,failure);
