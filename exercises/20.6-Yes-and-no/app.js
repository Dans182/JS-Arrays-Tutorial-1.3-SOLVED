let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let prueba = theBools.map(function(val) {
    if(val === 1) {
        return ("wiki")
    }
    else if (val === 0) {
        return ("woko")
    }
 return (val);
});
console.log(prueba)
