//Singleton
//Object.create
//object literals


const mySym=Symbol("key1")
const JsUser={
    name:"Tanushi",//name is considered as a string
    "fullname":"Hitesh Choudhary",
    [mySym]:"myKey1",//[] for Symbol
    age:20,
    location:"Jaipur",
    email:"tanushis201@gmail.com",
    isLoggedIn:false
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
console.log(typeof JsUser.mySym);//string->wrong
console.log(typeof JsUser[mySym]);
console.log(JsUser["email"]);
JsUser.email="tanushi@chatgpt.com"
Object.freeze(JsUser)
JsUser.email="tanushi@gpt.com"//Cannot be changed now

JsUser.greeting=function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());