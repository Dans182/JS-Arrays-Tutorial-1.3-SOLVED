function generateRandomArray()
{
	var auxArray = [];
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();

//Your code here

let theLastOne = myStupidArray[myStupidArray.length - 1];
console.log(theLastOne);

//tomar el ultimo elemento de una posición, en este caso tomo la última 
//posición de Arrays desconocidos

//otra forma:

// let lastPosition = myStupidArray.length - 1;
// let theLastOne = myStupidArray[lastPosition];
// console.log(theLastOne);
