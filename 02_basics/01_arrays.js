//arrays
const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]
const myArr3=new Array(1,2,3,4,5)
console.log(myArr[0]);

//Array methods
myArr.push(6)
myArr.pop()
myArr.unshift(9)//push in start 
myArr.shift()//remove from start
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newArr=myArr.join()//add elements of array into string
console.log(newArr);//0,1,2,3,4,5
console.log(typeOf(newArr));//String


//slice, splice

console.log("A", myArr);
const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);//1,2

const myn2=myArr.splice(1,3)
console.log("C",myArr)//manipulates original array-> 0,4,5
console.log(myn2);//1,2,3



