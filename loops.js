// There are three types of loops in javascript.

// for loop
let arr = [1,2,3,4,5];
for(let num = 0; num<=10; num++)
{
    console.log(num);
}
// for loop for array
for (let i = 0; i < arr.length; i++) 
{
  console.log(arr[i]);
}

//For Each loop for array
arr.forEach((element)=>
{
    console.log(element*element);
})
// for...of ---> It will print every element of array.
for(let i of arr)
{
    console.log(i);
}

// for...in ---> It will give index of array.
for(let i in arr)
{
    console.log(i);
}