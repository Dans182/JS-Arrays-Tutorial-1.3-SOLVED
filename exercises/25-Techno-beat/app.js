// Add your code here
let aux = [];
let aux2 = [];
const lyricsGenerator = (array) => {
    for (let value of array) {
        switch (value) {
            case 0:
                aux.push("Boom");
                break;

            case 1:
                aux.push("Drop the base");
                break;
        }

    }
    return aux
}


// Don't change anything bellow this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))