let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (let i = 0; i < par.length; i = i + 1){
    console.log(par[i]);
}
function contarLetras(letras) {
    var objeto = {}; 
    for(var i in letras){
        objeto[letras[i]] = ( objeto[letras[i]] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe
    }
    return objeto;
}