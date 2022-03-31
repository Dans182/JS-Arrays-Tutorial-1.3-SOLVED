let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((myArray) => {
            // magic goes inside these brackets
            if (myArray === 1) {
                return_array.push(myArray);
            }
            else {
                return_array.push("Yahoo");
            }
            
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));