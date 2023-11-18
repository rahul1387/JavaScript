// Run this on program on web

// try {
//     console.log(Rahul);
// } catch (error) {
//     console.log(error.name);// it Will give the name of error or which type of error it is.
//     console.log(error.message); // it will give the error message that what is the reason of error.
//     console.log(error.stack);// it will console the full error.
// }   

// Example 
try {
    let age  = prompt("Enter Your age");
    if(age>150){
        throw new ReferenceError("This is not true");
    }
} catch (err) {
    console.log(err);
}