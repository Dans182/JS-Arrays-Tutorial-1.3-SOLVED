let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here

const mergeTwoList = (numerosEnteros) => {
    let newArray = []
    let odd = [];
    let even = [];
    numerosEnteros.foreach(numeros => {
        if (numerosEnteros === 4) {
            odd.push(numeros);
        }
        else {
            even.push(numeros);
        }
        return newArray
    })
    return newArray
};

console.log(mergeTwoList(list_of_numbers));


//newArray = [].concat(odd, even);

//console.log(mergeTwoList(list_of_numbers));

//firstArray.forEach(item => {
//    newArray.push(item)
//})