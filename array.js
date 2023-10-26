// Array ---> Which is used to store n number of item in list
//Syntax 
var arr = [12, 23, 36, 35, 45, "Raj"]
// We can also include string in array
// console.log(arr);

// Example 
// 01 --> List of marks of five subjects and calculating percentage using array
var marks = [80+98+63+95+12];
var percentage = (marks/500)*100;
console.log(percentage, '%');

//Arrays methods 
console.log(arr.length);

arr.pop(); //---> It will remove the last element from the array.
arr.push("Rahul"); //---> It will add one more element in the array.
arr.shift(); //---> It will remove the first element from the array.
arr.unshift("Neeraj"); //---> It will add a element in the array whichs index will 0.
arr.toString(); //---> It will convert the array into String.

console.log(arr); 
