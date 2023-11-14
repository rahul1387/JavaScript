// Map Function of array in Javascript
let arr = [1,22,21,10];
let newArr1 = arr.map((value,index)=>{
    console.log(value,index);
    return value + index;
})

console.log(newArr1);

// Filter Function of array in Javascript.

let arr2 = [10,20,30,40];
let newArr2 = arr2.filter((a)=>{
    return a<40;
})
console.log(newArr2);


// Reduce Function of array in Javascript.
let arr3 = [1,2,3,4];
let a = arr3.reduce((R1,R2)=>{
    return R1 + R2;
})
console.log(a);
