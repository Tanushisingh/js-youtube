const coding=["js","ruby","java"]

//for-each doesn't return a value
/*const values=coding.forEach((item)=>{
    //console.log(item);
    return item
})
console.log(values);
*/

const myNums=[1,2,3,4,5,6,7,8,9,10]

/*const newNums=myNums.filter((num)=>{
    return num>4
})
*/
const newNums=[]
myNums.forEach((num)=>{
    if (num>4) {
        newNums.push(num)
    }
})
//when scope{} is defined, use the 'return' keyword
console.log(newNums);

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

const newNums1=myNumbers.map((num)=>num+10)
console.log(newNums1);

//Chaining
const newNums2=myNumbers
                .map((num)=>num*10)
                .map((num)=>num+10)
                .filter((num)=>num>=40)

console.log(newNums2);

