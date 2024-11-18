//const tinderUser=new Object() ->Singleton Object
const tinderUser={} //Non-Singleton Object
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);//hitesh

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
//const obj3= Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}//spread
console.log(obj3);
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    }
]
console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));

const course={
    coursename: "JS in hindi",
    price: "999",
    courseInstructor:"hitesh"
}
const {courseInstructor:instructor}=course//destructuring
//console.log(instructor);

//API
/*
{
    "name":"Tanushi",
    "rollno":"550"
}

[
    {},
    {}


]
*/





