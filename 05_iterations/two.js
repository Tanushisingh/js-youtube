const myObject={
    js:"Javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}
//for-in can be used for objects
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);
}