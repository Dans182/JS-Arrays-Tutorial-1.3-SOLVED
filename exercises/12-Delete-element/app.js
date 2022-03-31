//var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below

//let newArray = people.filter((deletePerson) => deletePerson === "daniella");


//console.log(deletePerson('daniella'));
//console.log(deletePerson('juan'));
//console.log(deletePerson('emilio'));

let array = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

let newArray = array.filter((element) => element !== "daniella" || element !== "juan");
console.log(element);