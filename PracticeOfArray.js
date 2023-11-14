// Question no1

let arr = [1,2,30,4,50,6,70,8,9,100];
let n = arr.filter((a)=>{
    return a%2 == 0;
})
console.log(n);

// Question no2

let arr2 = [1,2,30,4,50,6,70,8,9,100];
let m = arr.map((a)=>{
    return a*a;
})
console.log(m);