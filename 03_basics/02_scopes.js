var c = 300//will get 30
let c =300//correct
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log(a);//10
    
}
console.log(a);//undefined
console.log(b);//undefined
console.log(c);//30 (out of scope)

function one(){
    const username = "tanushi"
    function two(){
        const website = "youtube"
        console.log(username);//tanushi
    }
    //console.log(website);//error due to scope issue
    two()
}
one()

if(true){
    const username ="tanushi"
    if(username === "tanushi"){
        const website = "youtube"
        console.log(username +website);//tanushiyoutube
    }
    //console.log(website);//error
    
}
//console.log(username);//error
//++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++

addone(5)//6
function addone(num){
    return num+1
}

addtwo(5)//Error (variable)
const addtwo = function(num){
    return num+2
}
