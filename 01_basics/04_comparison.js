//console.log(2>1);
console.log("2">1); //true
 //Avoid such comparisons as it is at times converted into Nan or 0-------------------
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
//comparison and equal to are different in js
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//-----------------------------------------------------------------------------------
// === -> strict check
console.log("2"==2);
console.log("2"===2);

