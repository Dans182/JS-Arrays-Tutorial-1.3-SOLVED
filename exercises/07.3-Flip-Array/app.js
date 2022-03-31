var arr = [45,67,87,23,5,32,60];
var arrInverso = []

//Your code here.
for (let i = arr.length - 1; i >= 0; i = i - 1){ 
    arrInverso.push(arr[i]);
}
console.log(arrInverso);