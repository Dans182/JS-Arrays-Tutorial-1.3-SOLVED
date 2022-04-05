let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

function generateLI(color){
	let htmlString22 = '<li>'
	let htmlString33 = '</li>'
	return htmlString22 + color.label + htmlString33 
	// your code here
}

function filterColors(color){
	// your code here
	if (color.sexy == true){
		return color.label 
	}
}

function generateHTMLFromArray(array){
	
	
	let filteredOptions = array.filter(filterColors);
	let LIs = filteredOptions.map(generateLI);

	let htmlString = '<ul>';
	LIs.forEach(function(elm){
		htmlString += elm;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));

