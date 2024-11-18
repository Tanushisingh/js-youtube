//function definition
function sayMyName(){
    console.log("Hello");
    
}
sayMyName()//function reference

function addTwoNumbers(Number1,Number2){//parameters
   //console.log( Number1+Number2);
   let result=Number1+Number2
   console.log("Hitesh");//reachable code
   return result
   console.log("Hitesh");//unreachable code
   
}
const result= addTwoNumbers(3,4)//arguements
console.log("Result: ",result);

function loginUserMessage(username="sam"){//never empty
    if(username===undefined){
            console.log("Please enter a username");
            return
    }
    /*if(!username){
            console.log("Please enter a username");
            return
    }*/
    return `${username} just logged in`
}
console.log(loginUserMessage("Tanushi"));

function calculateCartPrice(val1,val2,...num1){//rest operator
    return num1
}
console.log(calculateCartPrice(2));

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price id ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));


