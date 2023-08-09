//Ways to print in Javascript
//console.log("Hello World");
//alert("This is an alert");
//document.write("This is an document write")


// 2.Javascript console API
// console.log("Hello World", 6 + 4, "Another log")
// console.warn("This is warning")
// console.error("This is an error")


//3. Javascript variables
// What are variables? - Container to store values.
var number1 = 20;
var number2 = 20;
// console.log(number1 + number2);

// 4. Data Types in Javascript
//Numbers
var num1 = 10;
var num2 = 15;

//Strings
var str1 = "Rhaul is a good boy";
var str2 = 'Neeraj is a bad boy';

//Objects
// console.log("This is Object:")
var marks = { rahul: 99.99, neeraj: 88, sneha: 10, raj: 15, };
// console.log(marks);

// Boolean
var a = true;
var b = false;
// console.log(a,b);

// difference in undefined and null
var und; //---> This is undefined means this variables has no value.
var n = null; //---> This is null value means the variable has a null value.

// There are two types of data types of dat a types in Javascript
// 1. Primitive data types--> Undefine,Null,Boolean,Numbers
// 2. reference data types---> Array and Object. 

// Array
// console.log("This is Array:")
var arr = [1, 2, 3, "Pizza", 4];
// console.log(arr);

//Operators in Javascript
//Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is: ", a+b);
// console.log("The value of a - b is: ", a-b);
// console.log("The value of a * b is: ", a*b);
// console.log("The value of a / b is: ", a/b);

//Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

//Comparison Operators
var x = 50;
var y = 100;
// console.log(x==y); 
// console.log(x<=y); 
// console.log(x>=y); 
// console.log(x<y); 
// console.log(x>y); 

// Logical Operators

// Logical AND(&&) operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical OR(||) Operators
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical not(!) opeartor
// console.log(!false);
// console.log(!true);

//Functions in Javascript
// DRY --> Do not repeat yourself
function avg(a, b) {
    var c = (a + b) / 2;
    return c;
}
c1 = avg(4, 6);
c2 = avg(10, 10);
// console.log(c1, c2);

//Conditionals in Javascript

// Singal if statement 
var age = 600;
// if(age<18)
// {
//     console.log("You are not adult");
// }

// if else Statements 
// if(age<18)
// {
//     console.log("You are not adult");
// }else
// {
//     console.log("You are adult now!");
// }

// if else ladder 
/*
if (age == 80) {
    console.log("You are senior citizen");
} else if (age < 18) {
    console.log("You are kid");
} else if (age == 60) {
    console.log("Confirm you are becoming older");
} else if (age == 90) {
    console.log("Confirm you are going die");
} else if (age == 110) {
    console.log("Confirm you are dead");
} else {
    console.log("You are not a human! aa! aa! Monster!!!");
    console.log("Run everybody!!!");
}
*/
// Constant
// WE can't redeclare this and We can't change the value second time.
const co = 0; // ---> We can't change the value because it is constant.

// let 
// WE can't redeclare this
let name = "Rahul";

{
    let name = "Neeraj";
    // console.log(name);
}
// console.log(name);

let myArr = ["Motor", "Book", 13, null, true];
// Array Methods 
// console.log(myArr.length);

// myArr.pop(); ---> It will remove the last element from the array.
// myArr.push("Rahul"); ---> It will add one more element in the array.
// myArr.shift(); ---> It will remove the first element from the array.
// myArr.unshift("Neeraj"); ---> It will add a element in the array whichs index will 0.
// myArr.toString(); ---> It will convert the array into String.

// console.log(myArr); 

// Strings Methods in Javascript.

let myString = "Rahul is good boy";
// console.log(myString.length);
// console.log(myString.indexOf("good"));
// console.log(myString.lastIndexOf("y"));

m = myString.replace("Rahul", "Neeraj");
// console.log(m);