//Immediately Invoked Function Expressions(IIFE)
//named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
    
})();
//; is imp. for 2 iife's
//this is equivalent to (function)()
//unnamed IIFE
( (name)=>{
    console.log(`DB CONNECTED TWO $(name)`);
    
})('hitesh')