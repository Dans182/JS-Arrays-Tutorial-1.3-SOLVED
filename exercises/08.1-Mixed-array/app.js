var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

let arrAux = []
for (let i = 0; i < mix.length; i = i + 1) {
    arrAux.push((typeof(mix[i])));
}
console.log(arrAux);