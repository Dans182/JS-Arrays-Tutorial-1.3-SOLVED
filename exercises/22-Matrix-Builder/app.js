// Code goes here
 
function matrixBuilder (argEntero){
    let matrixFinal = []
    for (let i = 0; i< argEntero; i++){
        let matrix = []
        matrixFinal.push(matrix);
        for (let i = 0; i< argEntero; i++){
           let numero = Math.floor(Math.random()*2);
           matrix.push(numero);
        }
    }
    return matrixFinal
  }


// do not change anything from this line down
 console.log(matrixBuilder(5))

