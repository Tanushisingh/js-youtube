// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const num=23
const bool=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);//false

const bigNumber=3676464764629463264832040213n

// Reference (Non primitive)

// Array, Objects, Functions

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"tanushi",
    age:20,

}
const myFunction=function(){
    console.log("Hello World");
    
}
console.log(typeof bigNumber);
/*
Primitive Data Type (Call by Value) => 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt. 
1) null -> object.
2) String -> string.
3) Boolean -> Boolean.
4) Undefined -> undefined.
5) Symbol -> symbol.
6) Number -> number.
7) BigInt -> BigIInt.
And the Data Types of Non primitive data type is Function object. 
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) -> Copy, Heap (Non-Primitive) -> Reference

let myYoutubename="tanushi.com"
let anothername="chaiaurcode"

console.log(myYoutubename);//tanushi.com
console.log(anothername);//chaiaurcode

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email= "tanushi@google.com"
console.log(userOne.email);//changed
console.log(userTwo.email);//changed

