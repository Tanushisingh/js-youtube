const name="Tanushi"
const repoCount=5;
//console.log(name+repoCount+" Value");//Tanushi5 Value
// ``-> back ticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('hitesh-hc')

console.log(gameName[0]);//h
console.log(gameName.__proto__);

console.log(gameName.length);//8
console.log(gameName.toUpperCase());//HITESH-HC
console.log(gameName.charAt(2));//t
console.log(gameName.indexOf('t'));//2
const newString=gameName.substring(0,4)//hite
const anotherString=gameName.slice(-8,4)//ite
const newStringOne="   hitesh   "
console.log(newStringOne.trim());//hitesh

const url="https://hitesh.com/hitesh%20choudhary"
console.log( url.replace('%20','-'));
console.log(url.includes('hitesh'))
console.log(gameName.split('-'));

