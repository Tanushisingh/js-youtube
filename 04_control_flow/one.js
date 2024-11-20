//if statement
const isUserloggedIn=true
if(isUserloggedIn){

}
// '===' -> Checks the datatype of value as well
// !== -> Checks negative sign

const balance=1000
if(balance >500) console.log("test"),
console.log("test2");//not a good practice

if(balance>500) console.log("test");

if(balance<500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 700");
}else if(balance<900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

const userLoggedIn=true
const debitCard=true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}