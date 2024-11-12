const score = 400
console.log(score);

const balance =new Number(100)
console.log(balance);
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//precision value

const otherNumber =23.8966

console.log(otherNumber.toPrecision(3));//23.9

const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));//- to +
console.log(Math.round(4.3));//4
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.8));//4
console.log(Math.min(4,3,6,8));//3
console.log(Math.random());//random values from (0 to 1)
console.log(Math.floor(Math.random()*10)+1);//greater than 1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min);









