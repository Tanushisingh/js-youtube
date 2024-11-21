//for
for(let index=0;index<10;index++){
    const element=index;
    console.log(element);
}

//for of
//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
const greetings="Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

//Maps
const map=new Map()//unique values, has indexing-> is ordered
map.set('IN',"India")
map.set('USA',"United States of America")
console.log(map);
for (const [key,value] of map) {
    console.log(key,':-',value);
}
/*const myObject={
    game1:'NFS',
    game2:'Spiderman'
}
for (const [key,value] of myObject) {
    console.log(key,':-',value);
    
}
//for-of cannot be applied on Objects...
for (const key in map) {
    console.log(key);
    
}*/
//Map is not iterable