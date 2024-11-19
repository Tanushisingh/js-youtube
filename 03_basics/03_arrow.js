const user = {
    username: "tanushi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);//current values
        
    }
}
user.welcomeMessage()
user.username='Sam'
user.welcomeMessage()
console.log(this);

function chai(){
    let username="tanushi"
    console.log(this.username);//can't be used in functions
    
}
chai()

const chai= ()=>{
    let username="tanushi"
    console.log(this.username);//can't be used in functions
    }
chai()

//Arrow function
const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,4));//7
//Arrow function- Implicit return
const addtwo1=(num1,num2)=> num1+num2

const addtwo2=(num1,num2)=> (num1+num2)//without {} return is avoided

const addtwo3=(num1,num2)=> ({username:"tanushi"})

const myArray=[2,5,6,9]
myArray.forEach()