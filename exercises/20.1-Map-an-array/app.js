var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	value = (value*9/5) + 32;
	return value;
	//add your code here and return the new value
	
});

console.log(arrayOfFahrenheitValues);

//°C × 9/5) + 32